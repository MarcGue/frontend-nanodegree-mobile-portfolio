## Website Performance Optimization portfolio project

This project is related to project 4 of the nanodegree Front-End Web Developer of Udacity.
To see the optimized page in action visit: https://marcgue.github.io/frontend-nanodegree-mobile-portfolio/

### Getting started
1. Make sure you installed NPM and Grunt
2. Download or clone this repository
3. Run 'npm install' to install all dependencies
4. Execute 'grunt' in your project's root directory
5. You will get a generated dist folder with the generated files for this project

### Explanation
I used grunt to uglify, minify etc. all of my source files. After that i call 'grunt doc' to copy the files to the doc folder 
and push it to github. My GitHub page points to my branch main/doc. So with this type of 'deploy' i didn't need to use ngrok or something similar and could instead use GitHub pages to measure page speed etc.

### Performence changes
* reseized and compress images to reduce size of the files and increase pagespeed with grunt
* added 'async' to the google analytics and perfmatters script tag
* removed font
* removed style.css and put the styles to the index.html
* added media print to print stylesheet in index.html
* added will-change to mover class in stylesheet

#### main.js
* refactored changedPizzaSizes()
* added new method 'onScroll()' and added requestAnimationFrame to it
* put the DocumentLoaded function into a requestAnimationFrame as well
* Changed document.querySelectorAll() -> document.getElementsByClassName