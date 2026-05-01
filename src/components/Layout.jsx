import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 150px)' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
