#! /bin/sh

# install packages
yarn --silent
REACT_APP_SERVER_PORT=$PORT yarn build
echo "files built"

# copy files
mv ./build/* ../server/public/
echo "files moved"
