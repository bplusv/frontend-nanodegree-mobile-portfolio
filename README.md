## Website Performance Optimization portfolio project

To install the project you need [Node.js](http://nodejs.org).
- First run 'npm install' to setup all the required dependencies.
- Next, run 'gulp' to build the site into the dist folder.
- You may now deploy the dist folder contents to a webserver.

Open your favorite Terminal and run these commands.
```sh
$ npm install
$ gulp
```

###PageSpeed Optimizations:

- Removed the google external font (browser currently includes 'Open Sans' font)
- Added the async attribute to google analytics scripts
- Risize pizzeria picture for use in index (img/pizzeria-index.jpg).
- Setup Gulp.js to automatically build & optimized the site:
	- Minification of CSS, JS & HTML code (gulp-minify-css, gulp-uglify, gulp-minify-html)
	- Automatic inlining of critical CSS (gulp-inline-source)
	- Automatic Image files optimization (gulp-imagemin)
- Setup .gitignore to prevent saving the builds & node_modules dependencies.


###Pizza site performance optimizations:
- Optimized the pizza resizing by removing unecessary DOM reads from the loop, reducing the number of reflows & paintings 
    - (First approach was removing from DOM, make changes, and reattaching.... but it seems faster to just update the width property on the loop, without reading other DOM properties on the loop).
- Optimized the pizzas animation on the background by removing uncessary work form the loop. Removed the reading of scrollTop property. (It seems that even just reading a property from the DOM is very costly...)


### Consulted Materials

Consulted a lot of materials on the matter, including the Google Performance guide:

* [Node.js](http://nodejs.org) - evented I/O for the backend
* [Gulp](http://gulpjs.com/) - the streaming build system
* http://andy-carter.com/blog/a-beginners-guide-to-the-task-runner-gulp
* http://markgoodyear.com/2014/01/getting-started-with-gulp/
* http://jonraasch.com/blog/10-javascript-performance-boosting-tips-from-nicholas-zakas
* https://developers.google.com/speed/articles/javascript-dom
* http://tech.pro/tutorial/1254/9-ways-to-optimize-your-front-end-performance