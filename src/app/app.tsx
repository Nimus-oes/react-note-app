import DesktopLayout from "../layout/desktop-layout";
import MobileLayout from "../layout/mobile-layout";
import { useIsMobile } from "../hooks/useIsMobile";

export default function App() {
  const isMobile = useIsMobile();

  return <div>{isMobile ? <MobileLayout /> : <DesktopLayout />}</div>;
}
