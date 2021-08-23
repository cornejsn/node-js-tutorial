import supertest from 'supertest'
import { describe } from 'yargs'
import app from './app.js'

describe("POST /users", () => {
  
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