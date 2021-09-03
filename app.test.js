import supertest from 'supertest'
import app from './app.js'

import 'regenerator-runtime/runtime'
const request = require('supertest');

describe("POST /register", () => {
  
  describe("given an improper username or password", () => {
    
    // test("should respond with a 200 status code", async () => {
    //   const response = await request(app).post("/register").send({
    //     username: "username",
    //     password: "password"
    //   })
    //   expect(response.statusCode).toBe(200)
    // })
    // test("should specify json in the content type header", async () => {
    //   const response = await request(app).post("/register").send({
    //     username: "username",
    //     password: "password"
    //   })
    //   expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    // })
    // test("response has userId", async () => {
    //   const response = await request(app).post("/register").send({
    //     username: "username",
    //     password: "password"
    //   })
    //   expect(response.body.userId).toBeDefined()
    // })
    test("username is too short", async () => {
      const response = await request(app).post("/register").send({
        username: "short",
        password: "password"
      })
      expect(response.statusCode).toBe(400)
    })
    test("username is too long", async () => {
      const response = await request(app).post("/register").send({
        username: "usernamethatistoolong",
        password: "password"
      })
      expect(response.statusCode).toBe(400)
    })
  })

  describe("when the username, password, or both are missing", () => {
    test("should respond with a 400 status code", async () => {
      const bodyData = [
        {username: "username"},
        {password: "password"},
        {}
      ]
      for (const body of bodyData) {
        const response = await request(app).post("/register").send(body)
        expect(response.statusCode).toBe(400)
      }
    })   
  })
})