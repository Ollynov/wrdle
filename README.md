# Project Overview

Deployed here: https://wordle-af6b0.web.app/

The objective here was to build out the minimal requirements for a Wordle App, with some data persistance that shows the user's stats.

Some known limitations:

- No unit tests
- The "word of the day" is selected based on day and month, so every year it will be rotating the same list of words
- No API used for the word list, just a list of 5 letter words
- No "Hard mode" or advanced features
- Limited animations or styling (especially on mobile)
- No instructions, the assumption is that the user already knows how to play
- No keyboard inputs, only online keyboard that requires clicks
- Limited comments in the code
- Limited security at Firebase level, anyone with the credentials can read and write from it
- Not error handling edge cases: incorrect logins, working on same browser with multiple users, etc.

## Available Scripts

### `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
