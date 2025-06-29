import { useIsMobile } from "../hooks/use-is-mobile";
import RootLayoutDesktop from "../layout/root-layout-desktop";
import RootLayoutMobile from "../layout/root-layout-mobile";

export default function App() {
  const isMobile = useIsMobile();
  const mobileLayout = <RootLayoutMobile />;
  const desktopLayout = <RootLayoutDesktop />;
  return <>{isMobile ? mobileLayout : desktopLayout}</>;
}
