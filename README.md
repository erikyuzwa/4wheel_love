# 4wheel_love
a demo of an online REST platform for an automotive maintenance system

## developer install for the REST server

The system is REST-based with interaction at the moment with MySQL.

* `git clone https://github.com/erikyuzwa/4wheel_love.git`
* `npm install` or `yarn install`
* edit `./config.yml` with your environment-specific details
* import the SQL tables from `./sql` to your MySQL server
* `npm start` or `yarn start` to launch the Express server on [http://localhost:3000](http://localhost:3000)

## testing with Postman

[Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) is a great tool
for using to test our API endpoint.

## check the wiki

More documentation is in the [wiki](https://github.com/erikyuzwa/4wheel_love/wiki)
