const request = require('supertest');
const app = require('../index.js');  // Adjust the path to point to your Express app

describe('POST /register', () => {

  it('should register a user and return success message', async () => {
    const userData = {
      username: 'testUser',
      email: 'test@email.com',
      password: 'testPassword'
    };

    const response = await request(app)
      .post('/register')
      .send(userData)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message).toBe('User registered successfully');
  });

  it('should return an error for missing password', async () => {
    const userData = {
      username: 'testUser',
      email: 'test@email.com'
      // missing password field
    };

    const response = await request(app)
      .post('/register')
      .send(userData)
      .expect(400);

    expect(response.body.error).toBe('Bad request: password is missing');
  });

  // Add more tests as needed, e.g., for invalid data, already registered user, etc.

});

