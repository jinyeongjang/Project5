import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1 bg-white">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
