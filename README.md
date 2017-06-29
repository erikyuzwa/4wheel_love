# 4wheel_love
a demo of an online REST platform for an automotive maintenance system.

## developer install for the REST server

The system is REST-based with database interaction using MySQL.

* `git clone https://github.com/erikyuzwa/4wheel_love.git`
* `npm install` or `yarn install`
* import the SQL tables from `./sql` to your MySQL server
* edit `./config.yml` with your environment-specific and/or database details
* `npm start` or `yarn start` to launch the Express server on [http://localhost:3000](http://localhost:3000)

## building the library

* make sure the `developer install` steps are followed
* `npm run build` will generate the minified version of our library in `./lib`
* `npm run dev` will generate the library in `./lib` in a `watch`-mode

## project directory layout

```
.
├── public
│   └── stylesheets
│       └── style.css
├── server
│   ├── app.js
│   ├── routes
│   │   ├── api.js
│   │   └── index.js
│   └── views
│       ├── customer.hbs
│       ├── error.hbs
│       ├── index.hbs
│       ├── layout.hbs
│       ├── maintenance.hbs
│       ├── transaction.hbs
│       └── vehicle.hbs
├── sql
│   ├── customers.sql
│   ├── maintenance.sql
│   ├── transactions.sql
│   └── vehicles.sql
├── src
│   ├── collections
│   │   ├── customers.js
│   │   ├── maintenances.js
│   │   ├── transactions.js
│   │   └── vehicles.js
│   ├── database
│   │   ├── db.js
│   │   └── pool.js
│   ├── index.js
│   └── models
│       ├── customer.js
│       ├── maintenance.js
│       ├── transaction.js
│       └── vehicle.js
├── test
│   ├── database
│   │   ├── db.spec.js
│   │   └── pool.spec.js
│   └── models
│       ├── customer.spec.js
│       ├── maintenance.spec.js
│       ├── transaction.spec.js
│       └── vehicle.spec.js
```

## testing with Postman

[Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) is a great tool
for using to test our API endpoint.

## testing with Apache Bench

TODO notes and comments around load tests...

## check the wiki

More documentation is in the [wiki](https://github.com/erikyuzwa/4wheel_love/wiki)
