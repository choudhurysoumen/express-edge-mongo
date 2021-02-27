# express-mongo-blog
List all activities performed for each session.

# s1-installing-project-files-blog-template
1. Download clean blog template from startbootstrap, unzip the folder and import to editor
2. npm init -y
3. npm install express
4. index.js setup express
5. npm install nodemon --save-dev and setup scripts in package.json start: nodemon index.js

# s2-create-blog-pages
1. import path library, this will help serve pages and resources
2. Setup index.js to serve different pages from /pages folder. 
3. Setup /public folder for static resources: app.use(express.static('public'))
4. Copy all required files(refer resources - js, css, images in html pages) and folders from /ui folder to /public folder - this is to support #2

# s3-express-edge-template-engine
1. npm install express-edge --save
2. Setup express-edge: app.use(expressEdge.engine); app.set('views', `${__dirname}/views`);
3. Create /views folder and create respective edge files and serve those from index.js using render function
4. Use template layout feature of edge. Define application reusable layout /views/layouts/app.edge
5. Copy content of index.html to app.edge and remove content part which is going to be different for individual pages. Define sections: @!section('content'),  @!section('scripts')
6. Use this layout and sections to rebuild all edge files
7. index.js: serve edge template files for different routes.
8. Delete unused /pages folder