import { NavLink } from "react-router";

export default function MobileNavBottom() {
  return (
    <>
      <NavLink to="">Home</NavLink>
      <NavLink to="">Search</NavLink>
      <NavLink to="">Archived</NavLink>
      <NavLink to="">Tags</NavLink>
      <NavLink to="">Settings</NavLink>
    </>
  );
}
