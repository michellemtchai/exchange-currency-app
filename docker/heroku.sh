#! /bin/sh

cd ./client

# install packages
yarn install --production

# build app
yarn build

# copy files
mv -v ./build/* ../server/public/

# prevent precompile
mkdir ../server/public/assets
cd ..
