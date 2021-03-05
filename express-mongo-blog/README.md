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

# s4-introduce-mongoose
1. Install MongoDB and Robo 3T. MongoDB Compass is also very useful.
2. npm install mongoose --save
3. index.js: mongoose.connect('mongodb://localhost/express-mongo-blog');
4. Create schema /database/models/Post.js
5. Create testdb.js to test database connection is working.

# s5-create-post-form
1. Create new-post.edge file with dummy text
2. index.js: setup /post/new route. Add the route in app.edge
3. Fix app.edge resource path problem by appending / to make it relative path
4. new-post.edge: Update file add form controls
5. index.js: set up route /post/store for post information submission. new-post.edge: add form action=/post/store and method=POST
6. Add body-parser: npm install body-parser
7. New Post information is available in index.js: inside /post/new route handler method verify req.body
 
 # s6-save-post-in-mongo
 1. index.js: Use Post model to save record in mongodb
 2. Verify the entered data vs. data persisted in mongo database, use previously installed Robo 3T client.
 3. List entered data in index.js: introduce async await to read Posts from database. Verify server log to verify Post list.
 4. index.js: pass posts through render function
 5. index.edge: remove all post-preview blocks and list passed posts data
 6. index.edge: Iterate over posts and display dynamic content in post-preview

 # s7-dynamic-route-link-for-post
 1. index.js: Update /post route to /post/:id
 2. Retrive post using findById(req.params.id) from Database and pass to Post page
 3. post.edge: display post.title to verify post information is passed correctly
 4. index.edge: link Post page by updating href=post.html href=/post/{{post._id}}

 # s8-update-post-schema-adjust-ui-pages
 1. Post.js: Update schema to support new fields
 2. Delete database using Robo 3T and npm start
 3. new-post.edge: Add new input controls for fields
 4. Use new Post fields to display on index.edge and post.edge screen
 5. Rename description field of Post schema to subheading and refactor respective pages

 # s9-middleware-and-refactoring-towards-mvc
 1. index.js: create custom middleware and understand the execution sequence
 2. index.js: add postValidator for '/post/store'
 3. Refactor to MVC - introduce controller: add controller folder and export routes content
 4. Export code to appropritae controllers 
 5. Refactor postValidator middleware

 # s10-user-registration
 1. User.js: Create user model
 2. Registration UI and controller created: register.edge, register.js
 3. store-user.js: Controller to handle user save operation to database. Map correct route in index.js

 # s11-mongoose-hooks-and-validation
 1. User.js: create a 'pre' save hook - UserSchema.pre
 2. npm i bcrypt --save 
 3. Use bcrypt to hash password: bcrypt.hash()
 4. User.js: add validation by updating schema configuration. Try to save invalid user and check the error at console.

 # feature/s12-user-login
 1. Create login.edge and login.js controller. Update index.js and add route
 2. Add route for posting user credentials and create userlogin controller
 3. userlogin.js: pull user by emailid and validate user credential using bcrypt
