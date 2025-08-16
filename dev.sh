#!/bin/bash

# Start TailwindCSS in watch mode and Hugo server concurrently
echo "Starting TailwindCSS watch mode and Hugo server..."

# Run TailwindCSS in watch mode in background
npm run build-css &

# Start Hugo server
hugo server --disableFastRender

# Clean up background process when script exits
trap 'kill $(jobs -p)' EXIT