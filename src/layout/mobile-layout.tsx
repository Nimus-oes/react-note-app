import { Outlet } from "react-router";
import AppHeader from "./nav/app-header";
import MobileNavBottom from "./nav/mobile-nav-bottom";

export default function MobileLayout() {
  return (
    <div>
      <AppHeader />
      <Outlet />
      <div>
        <MobileNavBottom />
      </div>
    </div>
  );
}
