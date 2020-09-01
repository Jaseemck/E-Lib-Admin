# E-Lib Admin Panel
#### Temp Repo

The Repo consists of two folders backend and frontend which consists of respective files. The project is built using the MERN stack.

## `Backend`

### Database

The Database consist of a collection book in which the details of books are stored. The schema of the same is as below: 

```
book
{
    name:*****
    author:*****
    description:******
    releaseDate:******
}
```
The database is stored in mongodb Atlas. All ip are whitelisted for the time being.

** Go to the backend directory and run the server.js file for running the server. The port used for backend is 5000. **

```
nodemon server.js
```

Backend is hosted in heroku app.

[Backend](http://lmsssbackend.herokuapp.com/)

## `Frontend`

The frontend is built using react js and deployed in netlify. It is available [here](https://elibrary-admin.netlify.app/).

Goto the frontend directory to run the app:

```
>npm install

>npm start

```

The react app will be available at port 3000 by default.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`Author : Jaseem ck`

## Happy Coding!
