import useIsMobile from "../hooks/use-is-mobile";

export default function App() {
  const isMobile = useIsMobile();
  const mobileLayout = <h1>Mobile Layout</h1>;
  const desktopLayout = <h1>Desktop Layout</h1>;

  return <>{isMobile ? mobileLayout : desktopLayout}</>;
}
