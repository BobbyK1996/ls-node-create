# ls-node-create

Recreating ls functionality with Node.js. Mostly an excuse to learn Node.

To run index.js from anywhere in the bash terminal:

1. Navigate to ls-node-create folder.
2. Run npm link

This will result in nls having the same file/folder listing capabilities as ls.

To remove this, enter into the bash terminal:

1. npm ls -g --depth=0. This lists all globally linked packages.
2. Navigate to the ls-node-create directory
3. Run npm unlink -g ls-node-create
