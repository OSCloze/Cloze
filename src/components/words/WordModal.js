// src/components/words/WordModal.js
import React from 'react';

export default function WordModal({ word, onClose }) {
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
        </div>
      </div>
    </>
  );
}