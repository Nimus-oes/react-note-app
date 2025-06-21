import { NavLink } from "react-router";

export default function MobileNavBottom() {
  return (
    <>
      <NavLink to="/notes/all">Home</NavLink>
      <NavLink to="">Search</NavLink>
      <NavLink to="/notes/archived">Archived</NavLink>
      <NavLink to="">Tags</NavLink>
      <NavLink to="">Settings</NavLink>
    </>
  );
}
