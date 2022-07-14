# Weather Forecast Project APP

App developed to give information about weather forecast.

I uses OpenWeatherAPI (<https://openweathermap.org/api>) to fetch information about the weather and React Google Places Autocomplete (<https://tintef.github.io/react-google-places-autocomplete/>) to autocomplete the addresses user types and find places' coordinates.

The project was created with Vite (<https://vitejs.dev/>), which is a build tool that offers a very fast server and an optmized build command.

## Running the app

Before run the app, some env variables must be configured.

Copy the `.env.example` file in an `.env.local` file and you will need OpenWeatherAPI key (<https://openweathermap.org/api>)
and GoogleMapsAPI Key (<https://developers.google.com/maps/documentation/javascript/get-api-key>)

With this keys configured in your `.env.local` file, run `yarn` or `npm install` to install all dependencies.

### Available Scripts

### `dev`
With dependencies installed, you can run `yarn dev` or `npm run dev` to run the app in development environment.

### `dev --host`
To expose the dev env app to your local network, run `yarn dev --host` or `npm run dev --host`.


### `build`
And finally, to build the project to production, run `yarn build` or `npm run build`.

