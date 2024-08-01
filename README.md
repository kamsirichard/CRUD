CRUD
CRUD API FOR BOOKS INTERVIEW SOLUTION

This is a simple API for managing a collection of books. You can create, read, update, and delete books, as well as upload and update book cover images.

## Table of Contents

- [Setup](#setup)
  - [What You Need](#what-you-need)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
  - [Start the Server](#start-the-server)
- [API Endpoints](#api-endpoints)
  - [Create a Book](#create-a-book)
  - [Get All Books](#get-all-books)
  - [Get a Book by ID](#get-a-book-by-id)
  - [Update a Book](#update-a-book)
  - [Delete a Book](#delete-a-book)
  - [Update Book Cover Image](#update-book-cover-image)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Setup

### What You Need

- Node.js (v14 or later)
- npm or yarn
- A MongoDB instance (I used MongoDB Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kamsirichard/CRUD.git
   cd books-api
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. # Environment Variables

Create a `.env` file in the root directory and add your MongoDB connection string and port number:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3001
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

# Usage

1 ### Start the Server

To start the server, run:

```bash
npm start
# or
yarn start
```

The server will be running on the port you specified in the `.env` file (default is `3001`).

# API Endpoints

1 ### Create a Book

- **URL:** `/books`
- **Method:** `POST`
- **Request Body:**

  ```json
  {
    "title": "string",
    "author": "string",
    "isbn": "string",
    "publishedDate": "string",
    "publisher": "string",
    "cover": "string" // URL to cover image
  }
  ```

- **Response:**
  - `201 Created`: Book created successfully
  - `409 Conflict`: Book with this ISBN already exists

2  Get All Books

- **URL:** `/books`
- **Method:** `GET`
- **Response:** `200 OK`: List of books

3  Get a Book by ID

- **URL:** `/books/:id`
- **Method:** `GET`
- **Response:**
  - `200 OK`: Book details
  - `404 Not Found`: Book not found

4  Update a Book

- **URL:** `/books/:id`
- **Method:** `PUT`
- **Request Body:**

  ```json
  {
    "title": "string",
    "author": "string",
    "isbn": "string",
    "publishedDate": "string",
    "publisher": "string",
    "cover": "string" // URL to cover image
  }
  ```

- **Response:**
  - `200 OK`: Book updated successfully
  - `404 Not Found`: Book not found

5  Delete a Book

- **URL:** `/books/:id`
- **Method:** `DELETE`
- **Response:**
  - `200 OK`: Book deleted successfully
  - `404 Not Found`: Book not found

6  Update Book Cover Image

- **URL:** `/books/cover-image/:id`
- **Method:** `PATCH`
- **Request:** Form data with a file field named `cover`
- **Response:**
  - `200 OK`: Cover image updated successfully
  - `404 Not Found`: Book not found

## Testing

To run the tests, use:

```bash
npm test
# or
yarn test
```

Make sure your MongoDB is running and the environment variables are set correctly before running the tests.

## Contributing

1. **Fork the repository**
2. **Create your feature branch:** `git checkout -b feature/your-feature-name`
3. **Commit your changes:** `git commit -m 'Add some feature'`
4. **Push to the branch:** `git push origin feature/your-feature-name`
5. **Open a pull request**

## License

This project is licensed under the MIT License.


This is a simple API for managing a collection of books. You can create, read, update, and delete books, as well as upload and update book cover images.

Table of Contents
Setup
What You Need
Installation
Environment Variables
Usage
Start the Server
API Endpoints
Create a Book
Get All Books
Get a Book by ID
Update a Book
Delete a Book
Update Book Cover Image
Testing
Contributing
License
Setup
What You Need
Node.js (v14 or later)
npm or yarn
A MongoDB instance (I used MongoDB Atlas)
Installation
Clone the repository:

git clone https://github.com/kamsirichard/CRUD.git
cd books-api
Install the dependencies:

npm install
# or
yarn install
Environment Variables
Create a .env file in the root directory and add your MongoDB connection string and port number:

MONGODB_URI=your_mongodb_connection_string
PORT=3001
Replace your_mongodb_connection_string with your actual MongoDB connection string.

Usage
1 ### Start the Server

To start the server, run:

npm start
# or
yarn start
The server will be running on the port you specified in the .env file (default is 3001).

API Endpoints
1 ### Create a Book

URL: /books

Method: POST

Request Body:

{
  "title": "string",
  "author": "string",
  "isbn": "string",
  "publishedDate": "string",
  "publisher": "string",
  "cover": "string" // URL to cover image
}
Response:

201 Created: Book created successfully
409 Conflict: Book with this ISBN already exists
2 ### Get All Books

URL: /books
Method: GET
Response: 200 OK: List of books
3 ### Get a Book by ID

URL: /books/:id
Method: GET
Response:
200 OK: Book details
404 Not Found: Book not found
4 ### Update a Book

URL: /books/:id

Method: PUT

Request Body:

{
  "title": "string",
  "author": "string",
  "isbn": "string",
  "publishedDate": "string",
  "publisher": "string",
  "cover": "string" // URL to cover image
}
Response:

200 OK: Book updated successfully
404 Not Found: Book not found
5 ### Delete a Book

URL: /books/:id
Method: DELETE
Response:
200 OK: Book deleted successfully
404 Not Found: Book not found
6 ### Update Book Cover Image

URL: /books/cover-image/:id
Method: PATCH
Request: Form data with a file field named cover
Response:
200 OK: Cover image updated successfully
404 Not Found: Book not found
Testing
To run the tests, use:

npm test
# or
yarn test
Make sure your MongoDB is running and the environment variables are set correctly before running the tests.

Contributing
Fork the repository
Create your feature branch: git checkout -b feature/your-feature-name
Commit your changes: git commit -m 'Add some feature'
Push to the branch: git push origin feature/your-feature-name
Open a pull request
License
This project is licensed under the MIT License.
