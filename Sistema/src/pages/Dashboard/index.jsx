import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";
import Header from "../../components/Header";
export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  async function handleLogout() {
    await logout();
  }
  return (
    <div>
      <Header />
      <h1>Dashboard de cria</h1>
      <span>de crias</span>

      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
