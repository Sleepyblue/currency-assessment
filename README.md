To start the proxy server, navigate to the project's root directory in your terminal and run the following command:

```js
node server/server.js
```

Once the proxy server is running, you can start the client-side project. In a new terminal window, navigate to the project's root directory and run:

```js
npm run start
```

This project also includes a few unit tests. To run these tests, use the following command:

```js
npm run test
```

Additionally, this project uses Storybook, a tool for developing UI components in isolation. To start Storybook, run:

```js
npm run storybook
```

Remember to always start the proxy server before starting the client-side project, as the client relies on the proxy to communicate with the API.
