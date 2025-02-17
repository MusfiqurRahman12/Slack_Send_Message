﻿# Slack_Send_Message
# Slack Automation

This project automates the process of signing into Slack and sending a message using Playwright.

## Overview

- Website: [Slack](https://slack.com)
- Technology: Playwright

## Features

- Sign in to your Slack workspace.
- Send a message to a specific channel.

## Setup Project

To set up the project, follow these steps:

1. Create Project Directory:
   ```bash
   mkdir slack-automation && cd slack-automation

2. Initialize npm:
   ```bash
   npm init -y
   ```

3. Install Playwright:
   ```bash
   npm install playwright
   ```

4. Create a `.env` file to store your credentials:
   ```plaintext
   EMAIL=your_email@example.com
   PASSWORD=your_password
   ```

5. Install `dotenv` to manage environment variables:
   ```bash
   npm install dotenv
   ```

## Create Test Script

Create a file named `slack-automation.js` and add the following code in the "Send-message.spec.js" within the repository.

To Run The Test Command in the Terminal :
* npx playwright test
* npx playwright show-report
* npx playwright test --ui (I highly recommend running your tests with UI Mode for a better developer experience where you can easily walk through each step of the test and visually see what was happening before, during and after each step. UI mode also comes with many other features such as the locator picker, watch mode and more.)



## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you want to add.

## License

This project is licensed under the MIT License.

Make sure to replace `<your-repo-url>` with your actual GitHub repository URL and update the email and password in the `.env` file with your actual Slack credentials.

Happy Testing 🚀
