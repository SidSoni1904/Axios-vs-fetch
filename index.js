// // 1. installation basic syntax
// fetch(url)
//   .then((res) => {
//     // handle response
//   })
//   .catch((error) => {
//     // handle error
//   });

// //npm install axios or cdn
// axios
//   .get(url)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// // 2. Auto stringify
// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// axios({
//   url: "http://api.com",
//   method: "POST",
//   header: {
//     "Content-Type": "application/json",
//   },
//   data: { name: "Sabesan", age: 25 },
// })
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// 3. Error Handling
// fetch("https://jsonplaceholder.typicode.com/todos/01231")
//   .then((response) => {
//     console.log("fetch response object:", response);
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// axios
//   .get("https://jsonplaceholder.typicode.com/todos/123441")
//   .then((response) => console.log(response))
//   .catch((error) => {
//     console.log(error.message);
//   });

// // 4. HTTP Interceptors

// fetch = ((originalFetch) => {
//   return (...arguments) => {
//     const result = originalFetch.apply(this, arguments);
//     return result.then(console.log("Request was sent"));
//   };
// })(fetch);

// fetch("url")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });
// // request interceptors
// axios.interceptors.request.use((config) => {
//   console.log("Request was sent");
//   // JWT as header
//   return config;
// });

// // response interceptors
// axios.interceptors.response.use((response) => {
//   // do an operation on response
//   return response;
// });

// axios
//   .get("url")
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error));

// // 5. Response Timeout

const controller = new AbortController();
const signal = controller.signal;
const options = {
  method: "POST",
  signal: signal,
  body: JSON.stringify({
    firstName: "Sabesan",
    lastName: "Sathananthan",
  }),
};
const promise = fetch("/login", options);
const timeoutId = setTimeout(() => controller.abort(), 5000);

promise
  .then((response) => {
    /* handle the response */
  })
  .catch((error) => console.error("timeout exceeded"));

axios({
  method: "post",
  url: "/login",
  timeout: 5000, // 5 seconds timeout
  data: {
    firstName: "Sabesan",
    lastName: "Sathananthan",
  },
})
  .then((response) => {
    /* handle the response */
  })
  .catch((error) => console.error("timeout exceeded"));

// // 6. npm install whatwg-fetch --save polyfill for fetch

// // 7. Axios built-in XSRF Protection
