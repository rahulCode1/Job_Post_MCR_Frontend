import { Outlet } from "react-router";
import Header from "./Header";
import { ToastContainer, Bounce  } from "react-toastify";

const RootLayout = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
