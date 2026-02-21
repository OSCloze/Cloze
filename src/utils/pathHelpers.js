// src/utils/pathHelpers.js

/**
 * Get the correct image path for both development and production
 * @param {string} path - The image path starting with a slash (e.g., "/images/chapter1/main.png")
 * @returns {string} - The full path with PUBLIC_URL prepended
 */
export const getImagePath = (path) => {
    // process.env.PUBLIC_URL is set by Create React App
    // In development, it's empty
    // In production (GitHub Pages), it's the repo name like "/Cloze"
    return process.env.PUBLIC_URL + path;
};