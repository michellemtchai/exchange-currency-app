#! /bin/sh

# install packages
REACT_APP_SERVER_PORT=$PORT react-scripts build
echo "files built"

# copy files
mv -v ./build/* ../server/public/
echo "files moved"

# move to server
cd ../server
