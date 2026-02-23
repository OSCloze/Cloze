// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';
import { useWordMastery } from '../hooks/useWordMastery';
import { useStoryProgress } from '../hooks/useStoryProgress';
import { useLocalFileSync } from '../hooks/useLocalFileSync';
import { levels } from '../data';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Navigation state
  const [currentPage, setCurrentPage] = useState('play');

  // UI state (expanded/collapsed levels)
  const [expandedLevels, setExpandedLevels] = useState({});

  // Custom hooks for data management
  const wordMasteryHook = useWordMastery();
  const storyProgressHook = useStoryProgress();
  const localFileSync = useLocalFileSync();

  /**
   * Toggle level accordion expansion
   */
  const toggleLevel = (levelId) => {
    setExpandedLevels(prev => ({
      ...prev,
      [levelId]: !prev[levelId]
    }));
  };

  /**
   * Handle a correct answer - updates word mastery and story progress
   */
  const handleCorrectAnswer = (wordId, sentenceId, chapterId) => {
    wordMasteryHook.incrementMastery(wordId);
    storyProgressHook.markSentenceRevealed(chapterId, sentenceId);
  };

  /**
   * Reset all progress (for settings page)
   */
  const resetAllProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      wordMasteryHook.resetMastery();
      storyProgressHook.resetStoryProgress();
    }
  };

  /**
   * Export all progress to a file
   */
  const exportAllProgress = () => {
    const progressData = {
      completedChapters: storyProgressHook.completedChapters,
      chapterProgress: storyProgressHook.chapterProgress,
      wordMastery: wordMasteryHook.wordMastery,
      lastUpdated: new Date().toISOString(),
      version: '1.0'
    };
    localFileSync.exportProgress(progressData);
  };

  /**
   * Import progress from a file
   */
  const importAllProgress = async () => {
    try {
      const progressData = await localFileSync.importProgress();

      // Validate the data has the expected structure
      if (progressData.completedChapters !== undefined) {
        // You'll need to add setter methods to your hooks for this to work
        // For now, we'll just show what would be imported
        console.log('Would import:', progressData);

        // Show a preview to the user
        const stats = {
          completedChapters: progressData.completedChapters?.length || 0,
          wordMastery: Object.keys(progressData.wordMastery || {}).length,
          lastUpdated: progressData.lastUpdated ? new Date(progressData.lastUpdated).toLocaleString() : 'Unknown'
        };

        const confirmImport = window.confirm(
          `Import Summary:\n` +
          `- Completed Chapters: ${stats.completedChapters}\n` +
          `- Words with mastery: ${stats.wordMastery}\n` +
          `- Last updated: ${stats.lastUpdated}\n\n` +
          `This will replace your current progress. Continue?`
        );

        if (confirmImport) {
          // Here you would update your hooks with the imported data
          // This requires adding setter methods to useWordMastery and useStoryProgress
          alert('Import functionality ready! (Setters need to be added to hooks)');
        }
      } else {
        alert('Invalid progress file: missing required data');
      }
    } catch (err) {
      console.error('Import failed:', err);
      // Error is already set in the hook
    }
  };

  const value = {
    // Navigation
    currentPage,
    setCurrentPage,

    // UI
    expandedLevels,
    toggleLevel,

    // Word mastery
    wordMastery: wordMasteryHook.wordMastery,
    getMasteryCount: wordMasteryHook.getMasteryCount,
    isWordLearned: wordMasteryHook.isWordLearned,
    isWordMastered: wordMasteryHook.isWordMastered,
    incrementMastery: wordMasteryHook.incrementMastery,
    resetMastery: wordMasteryHook.resetMastery,

    // Story progress (full API)
    ...storyProgressHook,

    // Combined actions
    handleCorrectAnswer,
    resetAllProgress,

    // Local file sync
    localFileSync: {
      ...localFileSync,
      exportAllProgress,
      importAllProgress,
    },

    // Static data
    levels
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}