// src/hooks/useLocalFileSync.js
import { useState } from 'react';

export function useLocalFileSync() {
    const [isExporting, setIsExporting] = useState(false);
    const [isImporting, setIsImporting] = useState(false);
    const [error, setError] = useState(null);

    // Export progress to a JSON file
    const exportProgress = (progressData) => {
        setIsExporting(true);
        setError(null);

        try {
            // Create a blob with the progress data
            const dataStr = JSON.stringify(progressData, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });

            // Create a download link
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;

            // Generate filename with date
            const date = new Date();
            const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
            link.download = `cloze-chinese-progress-${dateStr}.json`;

            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clean up
            URL.revokeObjectURL(url);

            console.log('Progress exported successfully');
        } catch (err) {
            console.error('Error exporting progress:', err);
            setError('Failed to export progress: ' + err.message);
        } finally {
            setIsExporting(false);
        }
    };

    // Import progress from a JSON file
    const importProgress = () => {
        return new Promise((resolve, reject) => {
            setIsImporting(true);
            setError(null);

            // Create a file input element
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json,application/json';

            input.onchange = (event) => {
                const file = event.target.files[0];
                if (!file) {
                    setIsImporting(false);
                    reject(new Error('No file selected'));
                    return;
                }

                const reader = new FileReader();

                reader.onload = (e) => {
                    try {
                        const content = e.target.result;
                        const progressData = JSON.parse(content);

                        // Validate the data structure (basic check)
                        if (!progressData || typeof progressData !== 'object') {
                            throw new Error('Invalid progress file format');
                        }

                        console.log('Progress imported successfully');
                        setIsImporting(false);
                        resolve(progressData);
                    } catch (err) {
                        console.error('Error parsing progress file:', err);
                        setError('Failed to parse progress file: ' + err.message);
                        setIsImporting(false);
                        reject(err);
                    }
                };

                reader.onerror = () => {
                    setError('Failed to read file');
                    setIsImporting(false);
                    reject(new Error('Failed to read file'));
                };

                reader.readAsText(file);
            };

            input.click();
        });
    };

    return {
        isExporting,
        isImporting,
        error,
        exportProgress,
        importProgress,
    };
}