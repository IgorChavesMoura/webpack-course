# Webpack course

## You can run the Quickbook micro frontend app with docker compose

```
docker-compose build && docker-compose up
```

## This is the I made to learn more about Webpack and how it makes the under the hood bundling for frameworks like React, Angular and Vue.

### **1. Basic**
A simple web page with a simple button that uses lodash to fill a list on click.
The goal is to learn how to do a basic bundle with Webpack
### **2. Modules**
A node program with that has both CommonJS and ES6 modules. 
The goal is to see how Webpack can handle both types of modules.

### **3. Loaders**
A simple web page that uses css, scss, image and font files through loaders. 
The goal is to see how to handle them with Webpack.

### **4. Plugins and Multiple Entries**
A simple web site with two pages. 
The goal is to use config Webpack to deal with multiple html files and also setup a dev server with auto reload.

### **5. Course project**
A simple course store site with two pages.
Here we have multiple goals:
 - See how Webpack can be used to copy the assets folder from the src folder to the dist folder.
 - See how the Bundle Analyzer plugin can be used to see the size of each part of the bundles. 
 - Optimize the dependencies by removing the duplicate code and creating a common bundle by splitting chunks. 
 - See how dynamic imports can be use to do lazy bundle loading.
 - Extracting CSS
 - Purging unused CSS
 - Shimming
 - Tree Shaking
 - Development and Production builds.
 
### **6. Simple React project**
A simple React application that clones Netflix
Here we also have multiple goals
 - See how to setup a React project from scratch with Webpack
 - See how to integrate ESLint with Webpack

### **7. Micro Frontends**
Multiple react applications working together as one movie booking application.
Here we also have multiple goals
 - See how to setup micro frontend Webpack apps with Webpack Module Federation.
 - See how dinamically import component from another application.
 - See ways to share state and do routing across multiple react applications.
