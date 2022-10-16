# SS-BACKENDTASK-ASIF-ESTIAK

## Installation

You can set up the environment by using npm or docker. You can use => 16.17.1 or a later version of Node JS to run the app with npm.

### Set up the environment by using NPM

1. Clone the GitHub repo in your local machine
2. Rename the `.env.example` file to `.env` from the root directory
3. Open terminal inside the root directory
4. Run this command `npm install`
5. After installation is done, run `npm start`

### Set up the environment by using NPM

1. Install Docker in your system
2. Clone the GitHub repo in your local machine
3. Rename the `.env.example` file to `.env` from the root directory
4. Open terminal inside the root directory
5. Run this command `docker image build -t be-img .` or `sudo docker image build -t be-img .`
6. After executing previous command, run this `docker container run -d -p 3333:3333 --name be-c1 --env-file .env be-img`. Add `sudo` if needed.

## Getting Started

You can use Postman, Insomnia, and GraphQL Playground (`http://localhost:3333/graphql`) to use the app.

#### Create a New User Example

```graphql
mutation createUser {
	createUser(userData: {
		firstName: "firstName"
		lastName: "lastName"
		username: "example"
		email: "example@example.com"
		password: "example"
	}) {
		id
	}
}
```

#### Authorize a User for Create Movie or TV Show Example

```graphql
mutation makeAuthorizedUser {
	makeAuthorizedUser(id: "634c1564ad6f9f837c5a7936")
}
```

#### Login a User Example

```graphql
mutation login {
	login(userData: {
		username: "example"
		password: "example"
	}) {
		accessToken
	}
}
```

#### Create A New Movie or TV Show Example

```graphql
mutation createMovieAndTVShows {
	createMovieAndTVShows(movieOrTVShowsData: {
		title: "Persuasion"
		image: "https://m.media-amazon.com/images/M/MV5BZDg3MzdiYjAtZWQ0MC00MDY4LWE5ZWEtNjliNTE3ZDZjNTU3XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg"
		storyline: "Living with her snobby family on the brink of bankruptcy, Anne Elliot is an unconforming woman with modern sensibilities. When Fredrick Wentworth the dashing one she once sent away crashes back into her life, Anne must choose between putting the past behind her or listening to her heart when it comes to second chances."
		genres: ["Drama", "Romance"]
		directors: ["Carrie Cracknell"]
		writers: ["Ron Bass", "Alice Victoria Winslow", "Jane Austen"]
		stars: ["Richard E. Grant", "Henry Golding", "Ben Bailey Smith"]
		rating: 5.7
		runtime: "1:48:00"
		releaseDate: "2022-7-15"
		countryOfOrigin: "England, UK"
		language: "English"
	}) {
		id
	}
}
```

* You've to set `Access Token` to `Headers`

#### Get A List of Movies or TV Shows Example

```graphql
query getMoviesAndTVShows {
	getMoviesAndTVShows {
		id
		title
		image
		storyline
	}
}
```

#### Get Details of a Movie or TV Show Example

```graphql
query getOneMovieOrTVShows {
	getOneMovieOrTVShows (id: "634c1c90ad6f9f837c5a794a") {
		id
		title
		image
		storyline
		genres
		directors
		writers
		stars
		provider
		totalEpisodes
		rating
		runtime
		releaseDate
		countryOfOrigin
		language
	}
}
```

* You've to set `Access Token` to `Headers`
