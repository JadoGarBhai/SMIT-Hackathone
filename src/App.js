import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Routes from "./Routes";
import "./Configure/global";

function App() {
  return (
    <>
      <Routes />
      {/* <SideBar /> */}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
