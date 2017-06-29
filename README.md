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
├── LICENSE
├── config.yml
├── lib
│   └── 4wheel-love-0.1.0.min.js
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

*TODO notes and comments around load tests...*

## check the wiki

More documentation and issues will show up in the [wiki](https://github.com/erikyuzwa/4wheel_love/wiki)

# LICENSE

MIT License

Copyright (c) 2017 Erik Yuzwa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
