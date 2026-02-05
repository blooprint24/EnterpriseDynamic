write-host "Checking for Node.js..."
$nodeVersion = node -v
if ($?) {
    write-host "Node.js detected: $nodeVersion"
    write-host "Installing dependencies..."
    npm install
    if ($?) {
        write-host "Starting Enterprise Dynamic..."
        npm run dev
    } else {
        write-host "Error installing dependencies. Please check your internet connection."
    }
} else {
    write-host "ERROR: Node.js is NOT detected."
    write-host "1. If the installer is running, please wait for it to finish."
    write-host "2. Close this terminal window and open a new one."
    write-host "3. Run this script again: .\start-site.ps1"
}
