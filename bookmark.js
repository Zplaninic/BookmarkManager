const { program } = require('commander');
const { prompt } = require('inquirer');
const { newBookmarkPrompt } = require('./prompts');
const { addBookmark, getBookmarks } = require('./utils');

program
  .version('0.0.1')
  .description('Bookmark management system');

program
  .command('new')
  .alias('a')
  .description('add a new contact')
  .action(() => {
    prompt(newBookmarkPrompt)
      .then(({ theme, url, priority }) => {
        const key = theme;
        const bookmarks = getBookmarks();
        bookmarks[key] = { url, priority };
        addBookmark(bookmarks);
      });
  });

program
  .command('list')
  .alias('l')
  .description('list bookmarks')
  .action(() => {
    const bookmarks = getBookmarks();
    prompt([
      {
        type: 'list',
        name: 'selected',
        message: 'Select a Bookmark',
        choices: Object.keys(bookmarks),
      },
    ])
      .then(({ selected }) => {
        const bookmark = bookmarks[selected];
        console.log(JSON.stringify(bookmark, null, 2));
      });
  });

program.parse(process.argv);
