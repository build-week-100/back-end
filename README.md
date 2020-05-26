# back-end
# African Market

### https://african-marketplace-rd.herokuapp.com/

## Schema

#### Users

---

```js
{
  id: INTEGER; // auto increments by database
  username: STRING; // not nullable , unique - 128 max chars
  password: STRING; // not nullable - 128 max chars
}
```

#### Listings

---

```js
{
  id: INTEGER; // auto increments by database
  product_name: TEXT; // not nullable - 128 max chars
  product_category: TEXT; // not nullable - 128 max chars
  product_description: TEXT; // nullable - 255 max chars
  product_quantity: TEXT; // not nullable - 128 max chars
  product_price: TEXT; // not nullable - 128 max chars
  country: TEXT; // not nullable - 128 max chars
  market_name: TEXT; // not nullable - 128 max chars
  created_at: TIMESTAMP; // defaults to now - no need to fill this out
  user_id: INTEGER; // references user id - the users id that created this listing!
}
```

## Endpoints

#### Auth

---

| Method | Endpoint              | Description        |
| ------ | --------------------- | ------------------ |
| POST   | `/api/auth/register`  | User Registration  |
| POST   | `/api/auth/login`     | User Login         |
| GET    | `/api/auth`           | Returns all users  |

#### Listings

---

| Method | Endpoint                          | Description                                                          |
| ------ | --------------------------------- | -------------------------------------------------------------------- |
| GET    | `/api/market`                     | Returns all listings                                                 |
| GET    | `/api/market/:id`                 | Returns listing with id from params                                  |
| GET    | `/api/market/user/:id`            | Returns listings of user with user id from params                    |
| POST   | `/api/market/user/:id`            | Creates a new listing under user with user id from params            |
| PUT    | `/api/market/:id`                 | Updates listing with id from params                                  |
| DELETE | `/api/market/:id`                 | Deletes listing with id from params                                  |
