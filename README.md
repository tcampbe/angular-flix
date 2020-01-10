## Intro
Let's build a project based on everyone's favorite app, Netflix. We want users to be able to search for movies and add them to their favorite list. We do not have a database of movies, so we will have to use an existing API to retrieve that data. We are going to use our server and database to store the user's favorite list. 

### Setup
* Sign up for [themoviedb.org](https://www.themoviedb.org/documentation/api)
* Fork, Clone, npm install, npm start
* [Get your api key](https://www.themoviedb.org/settings/api)
* [Read the instructions](https://developers.themoviedb.org/3/getting-started/introduction)

## Part 1

### Components
* Take a look at the existing compoments. Most are already made for you.
* Create two new components from scratch. We should be experts on this by now.
    * `Navigation`
    * `UserProfile`
* Look in app.component.html for the markup to use.
* Use the technique of comments and expand/collapse to move the markup into the component template.
* Replace the markup with the tags `<app-navigation>` and `<app-user-profile>`

### Build an `ApiService`
* You should have an example of building an Api service handy. Copy and paste it into this project.
* This is the service used to connect to your server or our practice server.
* The url should be https://ce-authenticated-backend.herokuapp.com/
* This service needs a get and post method.

### Build an `MovieApiService`
* You should have an example of building an Api service handy. Copy and paste it into this project.
* This is the service used to connect to the MovieDB Api.
* Copy and paste it into this project.
* The url should be https://api.themoviedb.org/3/
* This service needs a get method.
* This service has one more responsiblity than we have seen before. It must append the api key to every request. `&api_key=yourkey`. Just hard code this in the get method.

### Build a `MovieService`
* Import and inject the `MovieApiService` and `ApiService`
* The service class should have two properties
    * searchResults: []
    * myMovieList: []
* There should be these methods
    * getSearchResults()
        * return `this.searchResults`
    * getMovieList()
        * return `this.myMovieList`
    * async searchForMovies(searchTerm)
        * This method should call the `MovieApiService` get method passing in a path `3/search/multi?query=${searchTerm}`
        * Make sure you use string template literal format
        * Assign the results of the await call to `this.searchResults`
    * async getMovieList()
        * This method should call the `ApiService` get method passing in a path `publicapi/movies`
        * Assign the results of the await call to `this.myMovieList`
    * async saveToList(movie)
        * This method should call the `ApiService` post method passing in a path `publicapi/movies` and data `movie`


### search-box.component.ts
* Import `MovieService` into this component and use DI to assign it to a private field.
* In `loadSearch(e)` make a call to the `searchForMovies(searchTerm)` method. Send in the paramter `e.target.value`

### app.component.ts
* Import `MovieService` into this component and use DI to assign it to a private field.
* In `ngOnInit` make a call to the `getSearchResults` method. Assign the returned valu to `this.searchResults`
* In `ngOnInit` make a call to the `getMovieList` method. Assign the returned valu to `this.myMovieList`

### Bonus
* Add a message telling the user that no movies were found.

At this point, the first part of our app should be working. When a user types a movie name into the search box and hits the enter key, a call should be made to the movie API. The movies should now show up in the search results part of the page. It should show the movie image. As you hover the mouse over it, the name and description should show up. The user can now click on the plus sign icon to add the movie to the movie list. This will show up in the My Movie section, which is below the search results.  What is wrong with the way our app is working. Do you see movies in your movie list that you didn't pick? Why is that happening?



*******
*******
*******

## Part 2

### Create an Authentication Service
* This is the service to handle signing up and logging in
* The class needs a property for the token
* Create the signup and login methods
    * signup(username, password)
        * This method should call the `ApiService` post method passing in a path `auth/signup` and data `{username, password}`
    * login()
        * This method should call the `ApiService` post method passing in a path `auth/login` and data `{username, password}`
        * Extract the token from the response and save it in the token property
    * getToken()
        * return `this.token`
### AuthInterceptor
* Create an HttpInterceptor called `AuthInterceptor`. 
* Add this to the providers array in ngModule
* Import and inject our Authentication Service so that you are able to get the token to add to the header.
* 

### Change the `MovieService`
* We should have already built this service. Let's continue working on it.
* Change these methods
    * async getMovieList()
        * This method should call the `ApiService` get method passing in a path `movies`
    * async saveToList(movie)
        * This method should call the `ApiService` post method passing in a path `movies` and data `movie`



* removeMyMovie(id)
    * make a fetch DELETE to “/movies/” + id
    * on complete dispatch to loadMyMovieList()


### AppContainer.js
* import App
* import action `loadMyMovieList`
* mapStateToProps for props `searchResults` and `myMovieList` to state of the same name
* mapDisptachToProps for `loadMyMovieList`

### ListToggleContainer
* import ListToggle
* import action `saveMyMovie` and `removeMyMovie`
* mapDisptachToProps for `saveMyMovie` and `removeMyMovie`
* Change Item.js to use ListToggleContainer instead of ListToggle



### Points
* Base - 25 
* There are no runtime errors - 15
* My Movie list shows all movies from your database - 15
* Typing into the search text box and hitting enter shows a list of movies in the search results - 15
* Click one of the search results adds that movie to My Movie list - 15
* Click one of the movies in My Movie list removes it from the list - 15
