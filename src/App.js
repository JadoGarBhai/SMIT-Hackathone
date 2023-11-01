import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./Configure/global";
import Routing from "./Routing";
// import Navbar from "./components/Sidebar/Navbar";

function App() {
  return (
    <>
      <Routing />
      {/* <Navbar /> */}

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
