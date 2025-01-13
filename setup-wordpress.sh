#!/bin/bash

# Check for required commands and install if missing
check_and_install_deps() {
    if ! command -v wget &> /dev/null; then
        echo "wget not found. Installing..."
        if [[ "$OSTYPE" == "darwin"* ]]; then
            brew install wget
        elif command -v apt-get &> /dev/null; then
            sudo apt-get update && sudo apt-get install -y wget
        elif command -v yum &> /dev/null; then
            sudo yum install -y wget
        else
            echo "Error: Could not install wget. Please install it manually."
            exit 1
        fi
    fi

    if ! command -v unzip &> /dev/null; then
        echo "unzip not found. Installing..."
        if [[ "$OSTYPE" == "darwin"* ]]; then
            brew install unzip
        elif command -v apt-get &> /dev/null; then
            sudo apt-get update && sudo apt-get install -y unzip
        elif command -v yum &> /dev/null; then
            sudo yum install -y unzip
        else
            echo "Error: Could not install unzip. Please install it manually."
            exit 1
        fi
    fi
}

# Install dependencies
check_and_install_deps

# Create wp-content directory if it doesn't exist
mkdir -p wp-content/plugins

# Download and extract plugins
download_and_extract_plugin() {
    local plugin_name=$1
    local download_url=$2
    local plugins_dir="wp-content/plugins"
    
    echo "Downloading ${plugin_name}..."
    if wget -q "$download_url" -O "${plugins_dir}/${plugin_name}.zip"; then
        echo "Extracting ${plugin_name}..."
        (cd "$plugins_dir" && unzip -o "${plugin_name}.zip" && rm "${plugin_name}.zip")
    else
        echo "Failed to download ${plugin_name}"
        return 1
    fi
}

# Download and extract required plugins
download_and_extract_plugin "advanced-custom-fields" "https://downloads.wordpress.org/plugin/advanced-custom-fields.latest-stable.zip"
download_and_extract_plugin "acf-to-rest-api" "https://downloads.wordpress.org/plugin/acf-to-rest-api.latest-stable.zip"
download_and_extract_plugin "jwt-authentication-for-wp-rest-api" "https://downloads.wordpress.org/plugin/jwt-authentication-for-wp-rest-api.latest-stable.zip"

echo "WordPress plugins setup completed!" 