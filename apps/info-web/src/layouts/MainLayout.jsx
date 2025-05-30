// src/layouts/MainLayout.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/layout.css';

const MainLayout = ({ children, currentLayer, setCurrentLayer }) => {  
  return (
    <div className="app">
      <Header currentLayer={currentLayer} setCurrentLayer={setCurrentLayer} />
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
