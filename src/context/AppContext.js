import React, { createContext, useContext, useState } from 'react';
import { useWordMastery } from '../hooks/useWordMastery';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('play');
  const [expandedLevels, setExpandedLevels] = useState({});
  const wordMasteryHook = useWordMastery();

  const toggleLevel = (levelId) => {
    setExpandedLevels(prev => ({ ...prev, [levelId]: !prev[levelId] }));
  };

  const handleCorrectAnswer = (wordId) => {
    wordMasteryHook.incrementMastery(wordId);
  };

  const resetAllProgress = () => {
    if (window.confirm('Reset all progress? This cannot be undone.')) {
      wordMasteryHook.resetMastery();
    }
  };

  const value = {
    currentPage,
    setCurrentPage,
    expandedLevels,
    toggleLevel,
    wordMastery: wordMasteryHook.wordMastery,
    getMasteryCount: wordMasteryHook.getMasteryCount,
    isWordLearned: wordMasteryHook.isWordLearned,
    isWordMastered: wordMasteryHook.isWordMastered,
    incrementMastery: wordMasteryHook.incrementMastery,
    resetMastery: wordMasteryHook.resetMastery,
    handleCorrectAnswer,
    resetAllProgress,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}