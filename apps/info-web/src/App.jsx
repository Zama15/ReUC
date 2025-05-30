// src/App.jsx
import { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import InfrastructurePage from './pages/InfrastructurePage';
import DomainPage from './pages/DomainPage';
import ApplicationPage from './pages/ApplicationPage';
import PresentationPage from './pages/PresentationPage';
import AccessibilityPage from "./pages/AccessibilityPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [currentLayer, setCurrentLayer] = useState('presentation');

  const renderCurrentPage = () => {
    switch (currentLayer) {
      case 'infrastructure':
        return <InfrastructurePage setActiveLayer={setCurrentLayer}/>;
      case 'domain':
        return <DomainPage setActiveLayer={setCurrentLayer}/>;
      case 'application':
        return <ApplicationPage setActiveLayer={setCurrentLayer}/>;
      case 'presentation':
        return <PresentationPage setActiveLayer={setCurrentLayer}/>;
      case 'accessibility':
        return <AccessibilityPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <PresentationPage setActiveLayer={setCurrentLayer}/>;
    }
  };

  return (
    <MainLayout currentLayer={currentLayer} setCurrentLayer={setCurrentLayer}>
      {renderCurrentPage()}
    </MainLayout>
  );
}

export default App;
