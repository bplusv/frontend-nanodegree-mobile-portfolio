## Website Performance Optimization portfolio project

To install the project you need Noje.js the npm, and gulpJS.

First do 'npm install' to setup all the required dependencies.
Next, do 'gulp' to build the site into the dist folder.

You may now deploy a webserver using the dist folder.



PageSpeed Optimizations:

Added the async attribute to google analytics
Risize Pizzeria picture for index.

Setup Gulp.js to automatically build an optimized site:
	minification of css, js & html
	automatic inlining of critical css
	automatic image optimization

Setup .gitignore to prevent saving the builds & node dependencies.





Pizza site Performance Optimizations:

Optimiza pizza resizing by removing an element from the DOM first,
update the width styles, and finally reinsert the element into the DOM.
This prevents inecessary browser reflows & paints.

