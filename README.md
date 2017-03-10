# First Exam - Nicolás Gómez
This is a project that gets pictures from the flickr API and creates a rainbow of pictures from the result.
The code is divided in a backend and frontend folder. They were generated respectively with express-generator and create-react-app.
To run this project, `npm install` in both folders, and then run the backend project with either nodemon or `npm start` and run the frontend with `npm start`. The backend will listen on port 8080 and the frontend on port 3000.
### Backend
The main modifications to the backend boilerplate used can be seen in the `flickr` folder. Here, using the API, I made a function that makes the necessary requests to the API and returns an object 100 images that match a given search term and a given color. The path that serves this result as a JSON is `localhost:8080/:term-:color`.
###### IMPORTANT:
For the api to work, there should be a flickr-config.js file within the flickr folder. This file should consist only of the following lines:
```javascript
module.exports = {
  api_key: 'whatever',//Here goes your API key
  secret: 'supersecret' //Here goes your API secret
}
```
### Frontend
In the frontend project, the modifications are found in the `src` folder. Mainly, in `App.js` and inside `/components`. The main component of the frontend are `App`, `rainbow`, `color` and `image`.
- In  `App`, I render a basic title for the website and two inputs, one binded to a search term and one binded to the amount of images to display. Here is where I make calls to the backend whenever the submit button is clicked. Lastly, an instance of the Rainbow component is rendered.
- The `Rainbow` component receives an array of arrays of urls, and for each array it renders a `Color` component.
- The `Color` component renders a column of a certain number of `Image`'s that share a color.

#### Creative addition
As a creative addition, I implemented a slider that allows the user to control how many images are displayed in the rainbow for each color. When the user clicks the button that fetches the images, these are all stored in the main component of the frontend, and then each column of the rainbow receives an array of urls of images that correspond to a specific color. When the previously
#### Additional details
- If some images are loaded, it takes some time to update them to a new search term after the button has been clicked.
- The use of cors was enabled in the backend.
