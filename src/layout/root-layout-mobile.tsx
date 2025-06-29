import { Outlet } from "react-router";
import usePageTitle from "../hooks/use-page-title";
import AppHeader from "./navigation/app-header";
import NavBottomMobile from "./navigation/nav-bottom-mobile";

export default function RootLayoutMobile() {
  const pgaeTitle = usePageTitle();
  return (
    <div>
      <AppHeader />
      <div>{pgaeTitle}</div>
      <Outlet />
      <NavBottomMobile />
    </div>
  );
}
