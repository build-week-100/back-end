const supertest  = require('supertest');

const server = require('./server');

const db = require('./data/dbConfig');

beforeEach(() => {
    return db.migrate.rollback().then(()=>db.migrate.latest()).then(()=>db.seed.run());
});

describe('server', () => {
    it('should run tests', () => {
        expect(true).toBeTruthy()
    })

    describe('GET /', () => {
        it('should return http status code 200', async() => {
            const res = await supertest(server)
                .get('/');

            expect(res.status).toBe(200)
        })

        it('should return { message: "API is running" }', async() => {
            const res = await supertest(server)
                .get('/');

            expect(res.body).toEqual({ message: "API is running" })
        })
    })

    describe('GET /api/auth', () => {
        it('should return http status 200', async() => {
            const res = await supertest(server)
                .get('/api/auth');

            expect(res.status).toBe(200)
        })

        it('should return a list of users', async() => {
            const res = await supertest(server)
                .get('/api/auth');

            expect(Array.isArray(res.body.data)).toBe(true)
            expect(res.body.data.length).toBe(9)
        })
    })

    describe('POST /api/auth/register', () => {
        it('should return http status 201', async() => {
            const res = await supertest(server)
                .post('/api/auth/register')
                .send({ username: 'NewUser', password: 'password' })

            expect(res.status).toBe(201)
            expect(res.body.data.id).toBeDefined()                
        })

        it('should return http status 400 if no req body', async() => {
            const res = await supertest(server)
                .post('/api/auth/register')

            expect(res.status).toBe(400)
            expect(res.body).toEqual({ message: "No User Data" })
        })
    })

    describe('POST /api/auth/login', () => {
        it('should return http status 200', async() => {
            const res = await supertest(server)
                .post('/api/auth/login')
                .send({ username: 'BusiaMarket', password: 'password' })

            expect(res.status).toBe(200)
            expect(res.body.message).toBe("Welcome to api")
            expect(res.body.token).toBeDefined()
        })

        it('should return http status 400 if no req body', async() => {
            const res = await supertest(server)
                .post('/api/auth/login')

            expect(res.status).toBe(400)
        })
    })

    describe('GET /api/market', () => {
        it('should return http status 200', async() => {
            const logged = await supertest(server)
                .post('/api/auth/login')
                .send({ username: 'BusiaMarket', password: 'password' })

            const res = await supertest(server)
                .get('/api/market')
                .set('Authorization', logged.body.token)

            expect(res.status).toBe(200)
            expect(res.body.data.length).toBe(27)
        })

        it('should return http status 400, if not authorized', async() => {
            const res = await supertest(server)
                .get('/api/market')

            expect(res.status).toBe(400)
            expect(res.body).toEqual({ message: "Please provide authentification information" })
        })
    })

    describe('GET /api/market/:id', () => {
        it('should return http status 200', async() => {
            const logged = await supertest(server)
                .post('/api/auth/login')
                .send({ username: 'BusiaMarket', password: 'password' })

            const res = await supertest(server)
                .get('/api/market/2')
                .set('Authorization', logged.body.token)

            expect(res.status).toBe(200)
            expect(res.body.data.id).toBe(2)
        })

        it('should return http status 404 if listing with id not found', async() => {
            const logged = await supertest(server)
                .post('/api/auth/login')
                .send({ username: 'BusiaMarket', password: 'password' })

            const res = await supertest(server)
                .get('/api/market/50')
                .set('Authorization', logged.body.token)

            expect(res.status).toBe(404)
            expect(res.body).toEqual({ message: "Listing with specified ID not found" })
        })
    })

    describe('GET /api/market/user/:id', () => {
        it('should return http status 200', async() => {
            const logged = await supertest(server)
                .post('/api/auth/login')
                .send({ username: 'BusiaMarket', password: 'password' })

            const res = await supertest(server)
                .get('/api/market/user/2')
                .set('Authorization', logged.body.token)

            expect(res.status).toBe(200)
            expect(res.body.data.user_id).toBe(2)
        })

        it('should return http status 404 if user with id not found', async() => {
            const logged = await supertest(server)
                .post('/api/auth/login')
                .send({ username: 'BusiaMarket', password: 'password' })

            const res = await supertest(server)
                .get('/api/market/user/200')
                .set('Authorization', logged.body.token)

            expect(res.status).toBe(404)
            expect(res.body).toEqual({ message: "User with specified ID not found" })
        })
    })

    describe('POST /api/marked/user/:id', () => {
        it('should return http status 201', async() => {
            const logged = await supertest(server)
                .post('/api/auth/login')
                .send({ username: 'BusiaMarket', password: 'password' })

            const res = await supertest(server)
                .post('/api/market/user/2')
                .set('Authorization', logged.body.token)
                .send({ product_name: 'New', product_category: 'New', product_description: 'New', product_quantity: 'New', product_price: 'New', country: 'New', market_name: 'New' })

            expect(res.status).toBe(201)
            expect(res.body.data.id).toBeDefined()
        })

        it('should return http status 404 if user with id not found', async() => {
            const logged = await supertest(server)
                .post('/api/auth/login')
                .send({ username: 'BusiaMarket', password: 'password' })

            const res = await supertest(server)
                .post('/api/market/user/200')
                .set('Authorization', logged.body.token)
                .send({ product_name: 'New', product_category: 'New', product_description: 'New', product_quantity: 'New', product_price: 'New', country: 'New', market_name: 'New' })

            expect(res.status).toBe(404)
            expect(res.body).toEqual({ message: "User with specified ID not found" })

        })
    })

    describe('PUT /api/market/:id', () => {
        it('should return http status 200', async() => {
            const logged = await supertest(server)
                .post('/api/auth/login')
                .send({ username: 'BusiaMarket', password: 'password' })

            const res = await supertest(server)
                .put('/api/market/2')
                .set('Authorization', logged.body.token)
                .send({ product_name: 'New', product_category: 'New', product_description: 'New', product_quantity: 'New', product_price: 'New', country: 'New', market_name: 'New' })

            expect(res.status).toBe(200)
            expect(res.body.data.country).toBe("New")
        })

        it('should return http status 404 if listing with id not found', async() => {
            const logged = await supertest(server)
                .post('/api/auth/login')
                .send({ username: 'BusiaMarket', password: 'password' })

            const res = await supertest(server)
                .put('/api/market/200')
                .set('Authorization', logged.body.token)
                .send({ product_name: 'New', product_category: 'New', product_description: 'New', product_quantity: 'New', product_price: 'New', country: 'New', market_name: 'New' })

            expect(res.status).toBe(404)
            expect(res.body).toEqual({ message: "Listing with specified ID not found" })
        })
    })
})