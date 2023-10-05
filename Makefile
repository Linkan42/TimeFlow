# CLI:	Run `make` inside the root directory to automatically
#		compile and run the application.
#
#		Run `make install` inside the root directory to automatically
#		install dependencies, compile and run the application.

# If you're having trouble running the `make` command on Windows 10,
# try adding the following line to your `Path` variable:
# `<git-installation-directory>/usr/bin`. How to find the `Path` variable:
# Open File Explorer --> Right click on "This PC" --> Properties -->
# "Advanced system settings" under "Related Settings" -->
# Enviroment Variables --> Under "System variables", click "Path" and then
# "Edit" --> Click "New" and add the path `<git-installation-directory>/usr/bin`.
# The path may look like this: `C:\Program Files\Git\usr\bin`. Press OK to save
# and close all the windows. It's recommended to restart your PC to make sure
# the change is in effect.
# Please note that this possible solution is may only applicable if you have Git installed.

default:
	npm run lint-browser
	npm run build
	node src/Server/server.js

install:
	npm run lint-browser
	npm install
	npm run build
	node src/Server/server.js