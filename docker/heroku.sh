#! /bin/sh

# install packages
yarn install --production

# build app
REACT_APP_SERVER_PORT=$PORT npx react-scripts build

# copy files
mv -v ./build/* ../server/public/
