import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navigation from './components/layout/Navigation';
import PlayPage from './pages/PlayPage';
import ChaptersPage from './pages/ChaptersPage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

function AppContent() {
  const { currentPage } = useApp();

  // Global Enter Key Handler
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        // Find the currently visible primary action button
        // This checks for buttons in the active view only
        const activeView = document.querySelector('.view.is-active');
        if (!activeView) return;

        // Look for primary action buttons within the active view
        const primaryButton = activeView.querySelector(
          '.continue-story-btn, #nextButton, .btn-primary:not(:disabled)'
        );

        if (primaryButton && !primaryButton.disabled) {
          primaryButton.click();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="app">
      <Navigation />
      <div className="content">
        {currentPage === 'play' && <PlayPage />}
        {currentPage === 'chapters' && <ChaptersPage />}
        {currentPage === 'settings' && <SettingsPage />}
      </div>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;