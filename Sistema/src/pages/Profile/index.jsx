import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiSettings, FiUpload } from "react-icons/fi";
import { AuthContext } from "../../contexts/auth";
import { useContext, useState } from "react";
import "./profile.css";
import avatar from "../../assets/avatar.png";
import { doc, updateDoc } from "firebase/firestore";
import {
  db,
  storage,
} from "../../services/firebaseConnection";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { toast } from "react-toastify";

export default function Profile() {
  const { user, storageUser, setUser, logout } =
    useContext(AuthContext);

  const [nome, setNome] = useState(user && user.nome);

  const [email, setEmail] = useState(user && user.email);
  const [imageAvatar, setImageAvatar] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(
    user && user.avatarUrl
  );

  function handleFile(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (
        image.type === "image/jpeg" ||
        image.type === "image.png"
      ) {
        setImageAvatar(image);
        setAvatarUrl(URL.createObjectURL(image));
      } else {
        alert("Formato invalido! (Envie JPEG ou PNG)");
      }
    }
  }

  async function handleUpload() {
    const currentUid = user.uid;
    const uploadRef = ref(
      storage,
      `images/${currentUid}/${imageAvatar.name}`
    );
    const uploadTask = uploadBytes(
      uploadRef,
      imageAvatar
    ).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(
        async (downloadUrl) => {
          let urlFoto = downloadUrl;
          const docRef = doc(db, "users", user.uid);
          await updateDoc(docRef, {
            avatarUrl: urlFoto,
            nome: nome,
          }).then(() => {
            let data = {
              ...user,
              nome: nome,
              avatarUrl: urlFoto,
            };
            setUser(data);
            storageUser(data);
            toast.success("Atualizado com sucesso!");
          });
        }
      );
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (imageAvatar === null && nome !== "") {
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, { nome: nome }).then(() => {
        let data = { ...user, nome: nome };
        setUser(data);
        storageUser(data);
        toast.success("Dados atualizados com Sucesso!");
      });
    } else if (nome !== "" && imageAvatar !== null) {
      handleUpload();
    }
  }

  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Minha conta">
          <FiSettings size={24} />
        </Title>

        <div className="container">
          <form
            className="form-profile"
            onSubmit={handleSubmit}
          >
            <label className="label-avatar">
              <span>
                <FiUpload color="#fff" size={25} />
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFile}
              />
              <br />
              {avatarUrl === null ? (
                <img
                  src={avatar}
                  alt="Foto de Perfil"
                  width={250}
                />
              ) : (
                <img
                  src={avatarUrl}
                  alt="Foto de Perfil"
                  width={250}
                />
              )}
            </label>

            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
            <label>Email</label>
            <input
              type="text"
              value={email}
              disabled={true}
            />
            <button type="submit">Salvar</button>
          </form>
        </div>
        <div className="container">
          <button
            className="logout-btn"
            onClick={() => {
              logout();
            }}
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
