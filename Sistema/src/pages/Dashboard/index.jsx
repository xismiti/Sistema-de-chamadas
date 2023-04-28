import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";
import "./dashboard.css";
import Title from "../../components/Title";
import Header from "../../components/Header";
import {
  FiSearch,
  FiEdit2,
  FiPlus,
  FiMessageSquare,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import "./dashboard.css";
export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  async function handleLogout() {
    await logout();
  }
  return (
    <div>
      <Header />
      <div className="content">
        <Title name="Chamados">
          <FiMessageSquare size={25} />
        </Title>
        <>
          <Link to="/new" className="new">
            <FiPlus color="#fff" size={25} />
            Abrir Chamado
          </Link>
          <table>
            <thead>
              <tr>
                <th scope="col">Cliente</th>
                <th scope="col">Assunto</th>
                <th scope="col">Status</th>
                <th scope="col">Cadastrado em</th>
                <th scope="col">#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Cliente">
                  Mercado Esquina
                </td>
                <td data-label="Assunto">Suporte</td>
                <td data-label="Status">
                  <span
                    className="badge"
                    style={{ backgroundColor: "#999" }}
                  >
                    Aberto
                  </span>
                </td>
                <td data-label="Cadastrado">12/05/2022</td>
                <td data-label="#">
                  <button
                    className="action"
                    style={{ backgroundColor: "#3583f6" }}
                  >
                    <FiSearch color="#fff" size={17} />
                  </button>
                  <button
                    className="action"
                    style={{ backgroundColor: "#f6a935" }}
                  >
                    <FiEdit2 color="#fff" size={17} />
                  </button>
                </td>
              </tr>

              <tr>
                <td data-label="Cliente">
                  Xurrascaria do Xurrasco
                </td>
                <td data-label="Assunto">Suporte</td>
                <td data-label="Status">
                  <span
                    className="badge"
                    style={{ backgroundColor: "#999" }}
                  >
                    Aberto
                  </span>
                </td>
                <td data-label="Cadastrado">12/05/2022</td>
                <td data-label="#">
                  <button
                    className="action"
                    style={{ backgroundColor: "#3583f6" }}
                  >
                    <FiSearch color="#fff" size={17} />
                  </button>
                  <button
                    className="action"
                    style={{ backgroundColor: "#f6a935" }}
                  >
                    <FiEdit2 color="#fff" size={17} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
}
