import supertest from 'supertest'
import app from './app.js'

import 'regenerator-runtime/runtime'
const request = require('supertest');

describe("POST /register", () => {
  
  describe("given a username and password", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password"
      })
      expect(response.statusCode).toBe(200)
    })
  })

  describe("when the username and password is missing", () => {
        
  })
})