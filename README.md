# First Exam - Nicolás Gómez
-----
The code is divided in a backend and frontend folder. They were generated respectively with express-generator and create-react-app.
To run this project, `npm install` in both folders, and then run the backend project with either nodemon or `npm start` and run the frontend with `npm start`. The backend will listen on port 8080 and the frontend on port 3000.
### Backend
The main modifications to the backend boilerplate used can be seen in the `flickr` folder. Here, using the API and an array with all the colors of the rainbow, I made a function that makes the necesarry requests to the API and returns an object with all the colors and an array of pictures for each color. The path that server this result as a JSON is `localhost:8080/rainbow/:term`
### Frontend
