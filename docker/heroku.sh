#! /bin/sh

# install packages
REACT_APP_SERVER_PORT=$PORT npx react-scripts build

# copy files
mv -v ./build/* ../server/public/
