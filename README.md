

# Feature Flags Application Backend

This is a backend service for a feature flag system, allowing you to define, toggle, and evaluate feature flags at runtime. It is built with Node.js, TypeScript, Express, and Sequelize, and PostgreSQL (Supabase) as the database.

## Features

- Define feature flags with a unique name, global state, and description
- Retrieve and list all feature flags
- Evaluate feature flags globally, per user, or per group
- Override feature flags for specific users or groups
- REST API interface

## Table of Contents
- [Technologies Used](#technologies-used)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)

## Technologies Used

- Typescript
- Node.js
- Sequelize
- PostgreSQL (Supabase)

## Requirements

1. Install Node.js on macOS. [NodeJS](https://nodejs.org/en/download/package-manager)
   ```bash
   brew install node
   ```
2. Install watchman on macOS using brew. [Watchman](https://formulae.brew.sh/formula/watchman)
   ```bash
   brew install watchman
   ```

## Installation

1. To clone the repository:

   ```bash
   git clone  https://github.com/anjanibarlapati/feature-flags-application.git
   ```

2. To install dependencies, go to the directory and run following command:

    ```bash
    npm install
    ```

## Configure environment variables

Create a `.env` file at the root directory. Use your Supabase connection string.

 ## Usage

1. To run the application run below command`
   ```bash
   npm run start
   ```
    The server will start on the port specified in your `.env`.
       