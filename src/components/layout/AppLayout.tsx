import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const AppLayout = () => {
  return (
    <div className="px-2 bg-background dark:bg-slate-900">
      <Header />
      <main className="mx-auto min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
