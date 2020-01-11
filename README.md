## Intro
Let's build a project based on everyone's favorite app, Netflix. We want users to be able to search for movies and add them to their favorite list. We do not have a database of movies, so we will have to use an existing API to retrieve that data. We are going to use our server and database to store the user's favorite list. 

<img src="demo.gif">

### Setup
* Sign up for [themoviedb.org](https://www.themoviedb.org/documentation/api)
* Fork, Clone, npm install, npm start
* [Get your api key](https://www.themoviedb.org/settings/api)
* [Read the instructions](https://developers.themoviedb.org/3/getting-started/introduction)

### Components
* Take a look at the existing compoments. Most are already made for you.
* Create two new components from scratch. We should be experts on this by now.
    * `Navigation`
    * `UserProfile`
* Look in app.component.html for the markup to use.
* Use the technique of comments and expand/collapse to move the markup into the component template.
* Replace the markup with the tags `<app-navigation>` and `<app-user-profile>`

## Services
* Make sure to import your services into ngModule and add to the providers
* Import the `HttpClientModule` into ngModule and add to the imports

### Build an `ApiService`
* Import and use `HttpClient`
* You should have an example of building an Api service handy. Copy and paste it into this project.
* This is the service used to connect to your server or our practice server.
* The url should be https://ce-authenticated-backend.herokuapp.com/
* This service needs a get and post method.

### Build a `MovieApiService`
* Import and use `HttpClient`
* You should have an example of building an Api service handy. Copy and paste it into this project.
* This is the service used to connect to the MovieDB Api.
* Copy and paste it into this project.
* The url should be https://api.themoviedb.org/3/
* This service needs a get method.
* This service has one more responsiblity than we have not seen before. It must append the api key to every request. `&api_key=yourkey`. Just hard code this in the get method.

### Build a `MovieService`
* Import and inject the `MovieApiService` and `ApiService`
* The service class should have two properties
    * searchResults = []
    * myMovieList = []
* There should be these methods:
    * getSearchResults()
        * return `this.searchResults`
    * getMovieList()
        * return `this.myMovieList`
    * async searchForMovies(searchTerm)
        * This method should call the `MovieApiService` get method passing in a path `search/multi?query=${searchTerm}`
        * Make sure you use string template literal format
        * We will need to clear out the existing search results and add the new ones
        ```
        let response = await this.movieApi.get(`search/multi?query=${searchTerm}`);
        this.searchResults.length = 0;
        this.searchResults.push(...response.results);
        ```
    * async loadMovieList()
        * This method should call the `ApiService` get method passing in a path `publicapi/movies`
        ```
        let results = await this.api.get(`publicapi/movies`);
        this.myMovieList.length = 0;
        this.myMovieList.push(...results);
        ```
    * async saveToList(movie)
        * This method should call the `ApiService` post method passing in a path `publicapi/movies` and data `movie`
        * Call `this.loadMovieList();`


### search-box.component.ts
* Import `MovieService` into this component and use DI to assign it to a private field.
* In `loadSearch(e)` make a call to the service `searchForMovies(searchTerm)` method. Send in the paramter `e.target.value`
* Fix bug: What needs to be added to the event binding in `search-box.component.html`

### app.component.ts
* Import `MovieService` into this component.
* Add a constructor and use DI to assign it to a private field.
* In `ngOnInit` make a call to the service `getSearchResults` method. Assign the returned value to `this.searchResults`
* In `ngOnInit` make a call to the service `getMovieList` method. Assign the returned value to `this.myMovieList`
* In `ngOnInit` make a call to the service `loadMovieList` method. 

### list-toggle.component.ts
* Import `MovieService` into this component and use DI to assign it to a private field.
* In `saveMovieToList` call the service `saveToList(this.movie);`

### Bonus
* Add a message telling the user that no movies were found.
* Create a model for a movie. Use the data as an example of what properties it should have.
* Use types in all appropriate places, function return values, properties, parameters.
* A user probably should not be allowed to add the same movie to their list twice.

At this point, the first part of our app should be working. When a user types a movie name into the search box and hits the enter key, a call should be made to the movie API. The movies should now show up in the search results part of the page. It should show the movie image. As you hover the mouse over it, the name and description should show up. The user can now click on the plus sign icon to add the movie to the movie list. This will show up in the My Movie section, which is below the search results.  What is wrong with the way our app is working. Do you see movies in your movie list that you didn't pick? Why is that happening?