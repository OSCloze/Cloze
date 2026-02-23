// src/components/words/WordModal.js
import React, { useState, useEffect } from 'react';
import { getSentencesByWordId } from '../../data';
import WordSentencesList from './WordSentencesList';

export default function WordModal({ word, onClose }) {
  const [sentences, setSentences] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (word) {
      setLoading(true);
      // Get sentences that use this word
      const wordSentences = getSentencesByWordId(word.id);
      setSentences(wordSentences);
      setLoading(false);
    }
  }, [word]);

  if (!word) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="word-floating-modal">
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="word-detail">
          <div className="detail-character">{word.word}</div>
          <div className="detail-pinyin">{word.pinyin}</div>
          <div className="detail-meaning">{word.meaning}</div>

          {/* Sentences section */}
          <div className="word-sentences-section">
            {loading ? (
              <div className="loading-spinner">Loading sentences...</div>
            ) : (
              <WordSentencesList
                sentences={sentences}
                targetWordId={word.id}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}