import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop";
import { ToastContainer } from "react-toastify";

function RouteIdentifier() {
  const { pathname } = useLocation();

  useEffect(() => {
    let routeName = pathname.split("/")[1];
    routeName = routeName === "" ? "Home" : routeName;

    const title = routeName.charAt(0).toUpperCase() + routeName.slice(1);

    document.title = `Konectin | ${title}`;
  }, [pathname]);

  return (
    <>
      <ScrollToTop />
      <Outlet />
      <ToastContainer limit={1} />
    </>
  );
}

export default RouteIdentifier;
