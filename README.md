# bienal14

vue Frontend for a wordpress as backend.

## Project setup
```
yarn install
```
### Wordpress ENV
Wordpress installation should follow [this template's](https://github.com/gilbitron/wp-rest-theme) structure. This features a global `wp` object available for use of the frontend application:

```javascript
 {
  root: "http://www.bienaldeartesmediales.cl/14/index.php/wp-json/",
  base_url: "http://www.bienaldeartesmediales.cl/14",
  base_path: "/14/",
  nonce: "8b61807833",
  site_name: "14 BAM",
  routes: [
    {
      id: 1,
      type: "post",
      slug: "hello-world"
    },
    {
      id: 2,
      type: "page",
      slug: "sample-page"
    }
  ]
}
```

[This file](src/wpObjectMock.js) is used to mock this on development.

### Development
Some environment flags are needed in order to have some features:
```
VUE_APP_GOOGLE_GEO_API // google geo api used to retrieve lat, lng values from addresses
VUE_APP_MAPBOX_PUBLIC_TOKEN // token to be able to display map on home page
VUE_APP_CALENDAR_ID // google calendar id to display on home page
VUE_APP_CALENDAR_API_KEY // google calendar api key to be able to request data from calendars
VUE_APP_ASSETS_URL // public assets url on production, for example: if it's set to '/assets/', will look for public assets at origin.com/assets/
```

Start development server with hot reloading:
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
