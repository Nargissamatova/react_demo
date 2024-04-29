import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

function Root() {
  return (
    <>
      <Header />
      <main>
        <h2>Content will be chaning in here</h2>
      </main>
      <Footer />
      <Outlet />
    </>
  );
}

export default Root;
