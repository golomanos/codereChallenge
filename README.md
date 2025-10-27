# codereChallenge

The idea was to test the login functionality of codere, eversince I couldn't successfully login because I couldn't register a new account. I created 3 test scenarios which are: validating the response when the user leaves the username and passwords fields empty and attempts to login, checking what happens when the user attempts to login with wrong credentials or a non-existent account and observing what happens when a user attempts to login with blocked account.

Also during the tests, for some reason I started to get an access denied error when running the tests from chromium project so I added a logic to make the playwright skip the tests on that scenario.

# Playwright Project

This project is built with **Playwright v1.56.1** and **Node.js v10.2.4** for end-to-end testing.

## Project Structure

The project follows the **Page Object Model (POM)** structure.  
Each page or component is represented as a separate class that contains its own elements and actions, making the tests cleaner and easier to maintain.

## Environment Setup

### Install Node.js

If you don’t have Node.js installed, download and install version **10.2.4** (or later):

**Windows / macOS / Linux:**
```bash
# Using nvm (recommended)
nvm install 10.2.4
nvm use 10.2.4

# After clooning the repository, navigate into the project folder and run:

## Installation

npm init playwright@latest

```bash
# Install dependencies
npm install

# Run tests
npx playwright test --project firefox --workers 1


