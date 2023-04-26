import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./contexts/auth";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000} />
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
