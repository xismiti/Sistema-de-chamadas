import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";
import { FiHome } from "react-icons/fi";
import "./dashboard.css";

import Title from "../../components/Title";

import Header from "../../components/Header";
export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  async function handleLogout() {
    await logout();
  }
  return (
    <div>
      <Header />
      <Title name="Chamados">
        <FiHome size={24} />
      </Title>

      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
