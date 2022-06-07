#! /bin/sh

# install packages
yarn --silent
REACT_APP_SERVER_PORT=$PORT yarn build

# copy files
mv ./build/* ../server/public/
cd ..
