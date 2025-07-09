import useIsMobile from "../hooks/is-mobile";
import NavLayoutDesktop from "../layout/nav-layout-desktop";
import NavLayoutMobile from "../layout/nav-layout-mobile";

export default function App() {
  const isMobile = useIsMobile();
  return <>{isMobile ? <NavLayoutMobile /> : <NavLayoutDesktop />}</>;
}
