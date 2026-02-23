// src/pages/SettingsPage.js
import React from 'react';
import { useApp } from '../context/AppContext';

export default function SettingsPage() {
  const {
    wordMastery,
    resetAllProgress,
    setCurrentPage
  } = useApp();

  // Calculate total words learned (words with at least 1 mastery)
  const totalWordsLearned = Object.keys(wordMastery || {}).length;

  // Calculate total correct answers (sum of all mastery counts)
  const totalCorrectAnswers = Object.values(wordMastery || {}).reduce((sum, count) => sum + count, 0);

  // Calculate mastered words (words with 10 or more correct answers)
  const masteredWords = Object.entries(wordMastery || {}).filter(([_, count]) => count >= 10).length;

  const handleReset = () => {
    if (window.confirm('Are you absolutely sure? This will reset ALL your word mastery progress and cannot be undone.')) {
      resetAllProgress();
      alert('All word mastery progress has been reset!');
    }
  };

  return (
    <section className="view is-active" data-view="settings">
      <header className="header">
        <h1>Settings</h1>
        <p className="header-desc">Manage your learning progress and app settings.</p>
      </header>

      <div className="settings-panel">
        {/* Progress Stats */}
        <h2 className="settings-subtitle">Your Progress</h2>
        <div className="progress-stats">
          <div className="stat-item">
            <span className="stat-label">Words Learned:</span>
            <span className="stat-value">{totalWordsLearned}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Total Correct Answers:</span>
            <span className="stat-value">{totalCorrectAnswers}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Mastered Words:</span>
            <span className="stat-value">{masteredWords}</span>
          </div>
        </div>

        {/* Reset Progress Section */}
        <h2 className="settings-subtitle">Reset Progress</h2>
        <p className="settings-desc">
          Reset all your word mastery progress.
        </p>

        <button
          type="button"
          className="btn btn-danger"
          onClick={handleReset}
        >
          Reset All Word Mastery
        </button>

        {/* About Section */}
        <h2 className="settings-subtitle" style={{ marginTop: '2rem' }}>About</h2>
        <p className="settings-desc">
          <strong>Cloze Chinese</strong>
        </p>
        <p className="settings-desc">
          A fill-in-the-blank language learning app based on HSK vocabulary.
          100% free to use.
        </p>
        <p className="settings-desc" style={{ fontSize: '0.9rem', color: '#666' }}>
          Made by Nick
        </p>
      </div>
    </section>
  );
}