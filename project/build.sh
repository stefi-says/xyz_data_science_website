#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Move the build output to the required directory for Render
# Render expects static sites to be served from the 'dist' directory
# Since Vite already outputs to 'dist', we don't need to move anything 