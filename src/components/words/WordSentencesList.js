import React from 'react';

export default function WordSentencesList({ sentences, targetWordId }) {
    if (!sentences || sentences.length === 0) {
        return (
            <div className="word-sentences-empty">
                <p>No example sentences available for this word yet.</p>
            </div>
        );
    }

    return (
        <div className="word-sentences-list">
            <h4 className="word-sentences-title">Example Sentences</h4>
            <ul className="word-sentences">
                {sentences.map((sentence) => {
                    // Create a display version of the sentence with the target word highlighted
                    const displaySentence = sentence.words.map(word => {
                        if (word.wordId === targetWordId) {
                            return <span key={word.wordId} className="sentence-highlight">{word.text}</span>;
                        }
                        return word.text;
                    }).reduce((prev, curr) => [prev, ' ', curr]);

                    return (
                        <li key={sentence.id} className="word-sentence-item">
                            <div className="sentence-chinese">{displaySentence}</div>
                            <div className="sentence-pinyin">{sentence.pinyin}</div>
                            <div className="sentence-english">{sentence.nativeSentence}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}