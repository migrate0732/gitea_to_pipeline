#!/bin/bash

# Change to the application directory
cd /var/www/html

# Install application dependencies
npm install

# Build the Angular application
ng build --prod

