# README
This is an app that converts currency using the [Currency Exchange API](https://www.exchangerate-api.com/).

## Requirement
You will need [Docker](https://www.docker.com/) to run this app.

## Running the App
You will need to first setup the environmental variable by running the following:
### Development
```
cp ./docker/dev.env .env
```
### Seeing the App
You need to run `docker-compose up` to get the app running. Then, you can access the server side via the following url:
```
http://localhost:3000
```
Similarly, you can see the client-side app via the following url:
```
http://localhost:8080
```
The below is what you should see in your browser:
![Client Side App](./screenshot.png)
