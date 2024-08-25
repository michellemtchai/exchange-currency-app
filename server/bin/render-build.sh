#!/usr/bin/env bash
# exit on error
set -o errexit

cd ./server

bundle install
bundle exec rails assets:precompile
bundle exec rails assets:clean

# If you're using a Free instance type, you need to
# perform database migrations in the build command.
# Uncomment the following line:

if bundle db:exists; then
  echo
  echo "== Database exists. Running db:migrate."
  echo
  bundle db:migrate
else
  echo
  echo "== Database doesn't exist. Running db:reset."
  echo
  bundle db:create db:migrate db:seed
fi
