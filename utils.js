const fs = require('fs');
const path = require('path');

const bookmarksLocation = path.join(__dirname, 'bookmarks.json');

const getBookmarks = () => JSON.parse(fs.readFileSync(bookmarksLocation));

const addBookmark = (bookmark) => fs.writeFileSync(bookmarksLocation,
  JSON.stringify(bookmark, null, 2));

module.exports = {
  getBookmarks,
  addBookmark,
};
