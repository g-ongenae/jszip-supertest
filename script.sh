#! /bin/bash

# Create DIR for resulting ZIP
mkdir results-zip

# Generate ZIP with a simple curl
npm start &
sleep 1s
curl http://localhost:8080/ --output results-zip/curl.zip
ps aux | grep "[n]ode index.js" | awk '{print $2}' | xargs kill

# Generate ZIP with a supertest
npm test

# Unzip
unzip results-zip/curl.zip -d results-curl/
unzip results-zip/supertest-pipe.zip -d results-supertest-pipe/
unzip results-zip/supertest-binary-parser.zip -d results-supertest-binary-parser/

# Clean in non CI mode
if [ -z "${CI}" ] ; then
  rm -fr results-*
fi
