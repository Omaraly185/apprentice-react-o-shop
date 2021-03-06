// array in local storage for registered users
localStorage.setItem("users", JSON.stringify([{firstName:'Ahmed',lastName:'Aly',username:'ahmed.aly',password:'umbrage',id:'1'}]));
let users = JSON.parse(localStorage.getItem("users")) || [];
let products=JSON.parse(localStorage.getItem("products")) || [{
  title:'Apple',
  price: '1.00',
  category : 'Fruits',
  id:1,
  key:'apple'
},
{
  title:'Celery',
  price: '2.00',
  category : 'Vegetable',
  id:2,
  key:'celery',
},
{
  title:'Mango',
  price: '4.00',
  category : 'Fruits',
  id : 3,
  key:'mango'

},];

export function configureFakeBackend() {
  let realFetch = window.fetch;

  window.fetch = function (url, opts) {
    const { method, headers } = opts;
    console.log(opts);
    const body = opts.body && JSON.parse(opts.body);

    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
          case url.endsWith('/products/edit') && method === 'POST': 
            return editProduct();
          case url.endsWith('/products/add') && method === 'POST':
            return addProduct();
          case url.endsWith('products') && method === 'GET':
            return getProduct();
          case url.endsWith('/users/authenticate') && method === 'POST':
            return authenticate();
          case url.endsWith('/users/register') && method === 'POST':
            return register();
          case url.endsWith('/users') && method === 'GET':
            return getUsers();
          case url.match(/\/users\/\d+$/) && method === 'DELETE':
            return deleteUser();
          default:
            // pass through any requests not handled above
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error));
        }
      }

      // route functions
      function addProduct() {
        const product = body;

        product.id = products.length
          ? Math.max(...products.map((x)=> x.id)) + 1
          :1;
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));

        return ok();
      }

       // route functions
       function editProduct() {
        const {product, productPosition}  = body;

        product.id = productPosition;

        products[productPosition] = product;
        localStorage.setItem('products', JSON.stringify(products));

        return ok();
      }
     
      function getProduct() {
        const products = JSON.parse(localStorage.getItem('products'));

        return ok(products);
      }


      function authenticate() { 
        const { username, password } = body;
        const user = users.find(
          (x) => x.username === username && x.password === password
        );

        if (!user) return error('Username or password is incorrect');
        return ok({
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          token: 'fake-jwt-token',
        });
      }

      function register() {
        const user = body;

        if (users.find((x) => x.username === user.username)) {
          return error(`Username  ${user.username} is already taken`);
        }

        // assign user id and a few other properties then save
        user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        return ok();
      }

      function getUsers() {
        if (!isLoggedIn()) return unauthorized();

        return ok(users);
      }

      function deleteUser() {
        if (!isLoggedIn()) return unauthorized();

        users = users.filter((x) => x.id !== idFromUrl());
        localStorage.setItem('users', JSON.stringify(users));
        return ok();
      }

      // helper functions

      function ok(body) {
        resolve({
          ok: true,
          text: () => Promise.resolve(JSON.stringify(body)),
        });
      }

      function unauthorized() {
        resolve({
          status: 401,
          text: () =>
            Promise.resolve(JSON.stringify({ message: 'Unauthorized' })),
        });
      }

      function error(message) {
        resolve({
          status: 400,
          text: () => Promise.resolve(JSON.stringify({ message })),
        });
      }

      function isLoggedIn() {
        return headers['Authorization'] === 'Bearer fake-jwt-token';
      }

      function idFromUrl() {
        const urlParts = url.split('/');
        return parseInt(urlParts[urlParts.length - 1]);
      }
    });
  };
}