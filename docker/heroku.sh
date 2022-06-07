#! /bin/sh

# install packages
npm install
REACT_APP_SERVER_PORT=$PORT npm run build

# copy files
mv ./build/* ../server/public/
cd ../server
