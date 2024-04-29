import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

function Root() {
  return (
    <>
      <Header />
      <main>
        <h2>Content will be changing in here</h2>
      </main>
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
