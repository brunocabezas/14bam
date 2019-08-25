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
