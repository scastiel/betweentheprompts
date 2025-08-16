#!/bin/bash

# Build CSS with TailwindCSS
echo "Building CSS..."
npm run build-css-prod

# Build Hugo site
echo "Building Hugo site..."
hugo

echo "Build complete!"