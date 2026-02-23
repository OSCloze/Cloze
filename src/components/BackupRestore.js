// src/components/BackupRestore.js
import React from 'react';
import { useApp } from '../context/AppContext';

export default function BackupRestore() {
    const { localFileSync } = useApp();

    return (
        <div className="backup-restore-container">
            <h2 className="settings-subtitle">Save Progress</h2>
            <p className="settings-desc">
                Download your progress to a file or restore from a previous backup.
            </p>

            {localFileSync.error && (
                <div className="backup-error">
                    ⚠️ {localFileSync.error}
                </div>
            )}

            <div className="backup-actions">
                <button
                    onClick={localFileSync.exportAllProgress}
                    className="btn btn-primary"
                    disabled={localFileSync.isExporting}
                    style={{ marginRight: '1rem' }}
                >
                    {localFileSync.isExporting ? 'Exporting...' : 'Download Progress'}
                </button>

                <button
                    onClick={localFileSync.importAllProgress}
                    className="btn btn-secondary"
                    disabled={localFileSync.isImporting}
                >
                    {localFileSync.isImporting ? 'Importing...' : 'Restore Progress'}
                </button>
            </div>

            <p className="settings-desc" style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                Your progress file is a JSON file that you can store anywhere and restore on any device.
            </p>
        </div>
    );
}