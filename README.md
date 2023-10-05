<h1>**Comprehensive Blog-API Backend**</h1>

1. Create a Category Post

-Endpoint: POST api/Categoryposts
-Purpose: Create a new category post.
-Expected Parameters:
    Request Body Parameter:
        {
            "id":String,
            "name":String
        }
    Response Body:
        {
            "id": String,
            "name": String,
            "_id": "MongoDB id",
            "__v": 0
        }
-Middleware: bearerAuth: Authentication middleware.
-Validation middleware for id and name fields.


2. Create a Post api

-Endpoint: POST api/posts
-Purpose: Create a new post.
-Expected Parameters:
    Request Body Parameter:
        {
            "id":String,
            "title":String,
            "content":String,
            "category_id":ID from Category Schema
        }
    Response Body:
        {
            "id": String,
            "title": String,
            "content": String,
            "category_id": Category Id,
            "_id": MongoObjectId,
            "created_at": Date,
            "updated_at": Date,
            "__v": 0
        }

-Middleware:bearerAuth: Authentication middleware.
-Validation middleware for title and content fields.

3. Get All Post

-Endpoint: GET api/posts
-Purpose: Retrieve a list of all posts.
-Expected Parameters:
    Response Body:
        [
            {
                "_id": MongoObjectId,
                "id": String,
                "title": String,
                "content": String,
                "created_at": Date,
                "updated_at": Date,
                "__v": 0
            }
        ]
-Middleware:bearerAuth: Authentication middleware.
-Validation middleware for title and content fields.

4. Get a Post by it's ID

-Endpoint: GET api/posts/:id
-Purpose: Retrieve a regular post by its ID.
-Expected Parameters:
    Response Body:
        {
            "_id": MongoObjectId,
            "id": String,
            "title": String,
            "content": String,
            "category_id": categoryId  Schema,
            "created_at": Date
            "updated_at": Dtae,
            "__v": 0
        }
-Middleware:bearerAuth: Authentication middleware.
-Validation middleware to check if the provided ID is valid

5. Update a Post by it's ID
   
-Endpoint: PUT api/posts/:id
-Purpose: Update a regular post by its ID.
-Expected Parameters:
     Request Body:
        {
            "title":String,
            "content":String"
        }
    Response Body:
        {
            "_id": MongoObjectId,
            "id": String,
            "title": String,
            "content": String,
            "category_id": CategoryId Schema,
            "created_at": Date,
            "updated_at": Date,
            "__v": 0
        }
-Middleware bearerAuth: Authentication middleware.
-Validation middleware to check if the provided ID is valid and validate the title and content fields.


6. Delete the Post by its ID
   
-Endpoint: DELETE api/posts/:id
-Purpose: Delete a regular post by its ID.
-Expected Parameters:
    Response Body:
            {
                "_id": MongoObjectId,
                "id": String,
                "title": String,
                "content": String,
                "category_id": CategoryId Schema,
                "created_at": Date,
                "updated_at": Date,
                "__v": 0
            }
-Middleware:  bearerAuth: Authentication middleware.
-Validation middleware to check if the provided ID is valid

*to run the testcases: npm run test 
 to run the server: npm start*