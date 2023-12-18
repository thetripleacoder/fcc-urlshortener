# URL Shortener Microservice

This is the boilerplate code for the URL Shortener Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice.

This project is a solution to the **URL Shortener Microservice** backend certification project from **freeCodeCamp**. It provides an API endpoint for shortening long URLs.

## Project URL

You can access the live version of this microservice here: [URL Shortener Microservice](https://fcc-urlshortener-psi.vercel.app/)

## User Stories

1. You should provide your own project, not the example URL.
2. You can POST a URL to `/api/shorturl` and get a JSON response with `original_url` and `short_url` properties. Here's an example: `{ original_url : 'https://freeCodeCamp.org', short_url : 1}`
3. When you visit `/api/shorturl/<short_url>`, you will be redirected to the original URL.
4. If you pass an invalid URL that doesn't follow the valid `http://www.example.com` format, the JSON response will contain `{ error: 'invalid url' }`

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the server using `npm start`.
4. On the HTML page, enter a URL on the input box then click POST URL button
5. Go/redirect to the URL at `http://localhost:3000/api/shorturl/:short_url` with `short_url` URL parameter as `1`.
