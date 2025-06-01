#!/bin/bash
# Debug information
echo "Current directory: $(pwd)"
ls -la

# Navigate to project directory
cd project
echo "Entered project directory: $(pwd)"
ls -la

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building project..."
npm run build

# Show build output
echo "Build completed. Contents of dist directory:"
ls -la dist

# Return to root for Render to find the dist directory
cd ..
echo "Returned to root: $(pwd)" 