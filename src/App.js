import Routing from "./Routing/Routing";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./Configure/global";
import SideBar from "./Components/Sidebar/SideBar";

function App() {
  return (
    <>
      <Routing />
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
