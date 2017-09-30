# chat256

This project is a small JS app:
NodeJS API
React/Redux client

It lets you register as a client, then connect, and keep a token in your cookies for the next visit.
Once connected you can hash a message with 3 different algorithm: sha1 sha2 or md5 and choose the iterations.

## Requirements

- Install mongo (brew install mongo on Mac)
- Install yarn (brew install npm on Mac)

## Launch

- Clone the repository
- Open 3 terminal

### terminal 1

- ```mkdir $HOME/db```
- ```mongod --dbpath=$HOME/db```

### terminal 2

- ```cd back```
- ```yarn start```

### terminal 3

- ```cd front```
- ```yarn start```

- go to http://localhost:8080
