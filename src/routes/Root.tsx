import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Nav />
      <main className="max-w-main-width mx-auto py-4">
        <Outlet />
      </main>
    </>
  );
}
