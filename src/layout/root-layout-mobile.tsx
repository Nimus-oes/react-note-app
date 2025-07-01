import { Outlet } from "react-router";
import AppHeader from "./navigation/app-header";
import NavBottomMobile from "./navigation/nav-bottom-mobile";

export default function RootLayoutMobile() {
  return (
    <div>
      <AppHeader />
      <Outlet />
      <NavBottomMobile />
    </div>
  );
}
