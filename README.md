<p align="center">
<a href="https://csoverflow.herokuapp.com/">
<img src="assets/logo.png" alt="Logo" height="100px"/>
</a>
</p>

<p align="center">
<b>
Q/A forum for Computer Science & Engineering students.
</b>
</p>

<p align="center">
<img src="https://img.shields.io/static/v1?label=version&message=1.0.0&color=blue" alt="version" />
<a href="https://www.codacy.com/gh/adarshaacharya/CsOverflow/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=adarshaacharya/CsOverflow&amp;utm_campaign=Badge_Grade">
<img src="https://app.codacy.com/project/badge/Grade/0d9e7dd307aa44528e75abc123e01a85" alt="Codacy Badge" >
</a>

<a href="https://github.com/adarshaacharya/CsOverflow/blob/master/LICENSE" target="_blank">
<img alt="License: MIT" src="https://img.shields.io/github/license/adarshaacharya/CsOverflow" />
<img src="https://pyheroku-badge.herokuapp.com/?app=csoverflow" alt="Heroku">
</a>
</p>

  <p align="center">
    <a href="https://csoverflow.herokuapp.com">View Demo</a>
    ·
    <a href="https://github.com/adarshaacharya/CsOverflow/issues">Report Bug</a>
    ·
    <a href="https://github.com/adarshaacharya/CsOverflow/issues">Request Feature</a>
  </p>
  <p align="center">Ask a questioncontribute an answer and upvote your favourite one! CsOverflow gives students correct answer and derivation of all relevant computer science and engineering questions.</p>

## ⭐ Features

- Token based secured authentication system
- Ask question by categorizing based on tags and perform CRUD optertions
- Upvote and contribute answer to question
- Filter question based on tags and search feature
- Attractive user Dashboard, and many more..

> ⚠️ _Website isn't mobile friendly and for best experience use Google Chrome._

## 💻 Tech Stack

- **Frontend** : Typescript, React.js, Redux
- **Styling** : Ant Design, Custom Css with BEM naming convention
- **Backend** : Typescript, Node.js with Express framework
- **Database** : Sequelize ORM with PostgresSQL database
- **Deployment** : Server, Client and Database hosted on Heroku

## 📺 Prerequisites

Before running app locally make sure that you install following things:

- Nodejs with npm or yarn with following version installed :
  _npm >= 6.14.8 or yarn >= 1.22.4 with node >= 12.19.1_
- [PostgreSQL >= 13.1](https://www.postgresql.org/) as database.
- Download & install [pgadmin](https://www.pgadmin.org/download/) as PostgreSQL client for easier psql database setup.

## 🚀 Local Development

### Step 1: Clone the repo

```bash
$ https://github.com/adarshaacharya/csoverflow.git
```

### Step 2: Install dependencies

Install both client and server dependencies

```bash

# Install dependencies for server
$ npm install

# Install dependencies for client
$ npm run client:install

```

### Step 3: Configuration

1. Create `.env` file in project root dir

   ```bash
   $ touch .env
   ```

2. Copy everything from `.env.example` as paste it in `.env`

3. Create database named `csoverflow` with `pgadmin` or `postgres cli` from your terminal. _(You don't have to create tables for database)_

4. Replace the fields like`DB_HOST`, `DB_USER`, etc. with your postgres database setup. Place random word as `jsonwebtoken` in `JWT_SECRET`.

5. Checkout my local configuration in `.env.development` file and set your config accordingly.

### Step 4: Usage

Now you can run the application by :

```bash

# Run the client & server with concurrently (for running full application)
$ npm run develop

# Run the Express server only
$ npm run server

# Run the React client only
$ npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000

```

## ⛵ Production Deployment

There is a Heroku post build script so that you do not have to compile your React frontend manually, it is done on the server. Simply push to Heroku and it will build and load the client index.html page

## 🤝 Contributing

Contributions, issues and feature requests are welcome. After cloning & setting up project locally, you can just submit a PR to this repo and it will be deployed once it's accepted.
Read [CONTRIBUTING.md](https://github.com/adarshaacharya/CsOverflow/blob/master/CONTRIBUTING.md) for complete guide of Contribution

**⚠️ Note - Commit & PR Title :**

It’s good to have descriptive commit messages so that other folks can make sense of what your commit is doing.
This project uses [Husky](https://github.com/typicode/husky/blob/master/README.md) prevent bad `git commit`, `git push` and more 🐶 \_woof!

Read [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/) before making the commit message.

## 👏🏻 Show your support

Give a ⭐️ if you like the project! :tada:

## 👤 Author

- Website: <https://adarshaacharya.com.np/>
- Twitter: [@adarshatweets](https://twitter.com/adarshatweets)
- Github: [@adarshaacharya](https://github.com/adarshaacharya)
- LinkedIn: [@adarshaacharya](https://linkedin.com/in/adarshaacharya)

## 📝 License

Copyright © 2020 [Aadarsha Acharya](http://adarshaacharya.com.np/).<br />
This project is [MIT](https://github.com/adarshaacharya/CsOverflow/blob/master/LICENSE) licensed.
