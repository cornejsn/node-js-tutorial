import supertest from 'supertest'
import app from './app.js'

import 'regenerator-runtime/runtime'
const request = require('supertest');

describe("POST /register", () => {
  
  // describe("testing password complexity checker: ", () => {
  //   test("password is too short", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "username",
  //       password: "Q!w2"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  //   test("password is too short", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "username",
  //       password: "Q!w2Egf"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  //   test("password is too short", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "username",
  //       password: "Q!w2wq!"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })

  //   test("password is too long", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "username",
  //       password: "Q!w2qw5!RE3d3d1@asdfqa156"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  //   test("password is too long", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "username",
  //       password: "Q!w2qw5!R@@#gasmgapASDG"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  //   test("password is too long", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "username",
  //       password: "Q!w2qw5!RE3d3d1@a"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })

  //   test("password does not have an uppercase letter", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "username",
  //       password: "q!w@15a851a"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })

  //   test("password does not have an lowercase letter", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "username",
  //       password: "Q!W@15A851A"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })

  //   test("password does not have a special character", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "username",
  //       password: "QW15A851Adjt"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })

  //   test("password meets all requirements", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "username",
  //       password: "Q!w2e#a85TS"
  //     })
  //     expect(response.statusCode).toBe(200)
  //   })
  // })

  // describe("testing username complexity checker: ", () => {
  //   test("username is too short", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "User",
  //       password: "Q!w2e#a85TS"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  //   test("username is too long", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "UsernameThatIsTooLong",
  //       password: "Q!w2e#a85TS"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  //   test("username contains a number", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "Username1",
  //       password: "Q!w2e#a85TS"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  //   test("username contains a special character", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "Username!",
  //       password: "Q!w2e#a85TS"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  //   test("username meets all requirements", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "Username",
  //       password: "Q!w2e#a85TS"
  //     })
  //     expect(response.statusCode).toBe(200)
  //   })
  // })
  
  // describe("testing email complexity checker: ", () => {
  //   test("email name is too short", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "Username",
  //       password: "Q!w2e#a85TS",
  //       email: "dab@gmail.com"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  //   test("email name has special characters", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "Username",
  //       password: "Q!w2e#a85TS",
  //       email: "emailname$@gmail.com"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  //   test("email name has no '@' symbol", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "Username",
  //       password: "Q!w2e#a85TS",
  //       email: "emailnamegmail.com"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  //   test("domain name is too short", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "Username",
  //       password: "Q!w2e#a85TS",
  //       email: "emailname@bas.com"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  //   test("domain name has a special character", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "Username",
  //       password: "Q!w2e#a85TS",
  //       email: "emailname@random$.com"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  //   test("domain name does not end with '.com' or '.net'", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "Username",
  //       password: "Q!w2e#a85TS",
  //       email: "emailname@gmail.biz"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  //   test("email meets all requirements", async () => {
  //     const response = await request(app).post("/register").send({
  //       username: "Username",
  //       password: "Q!w2e#a85TS",
  //       email: "validEmail@gmail.com"
  //     })
  //     expect(response.statusCode).toBe(400)
  //   })
  // })
  
  describe("when any, or all pieces of information are missing", () => {
    test("should respond with a 400 status code", async () => {
      const bodyData = [
        {username: "username"},
        {password: "Q!w2e#a85TS"},
        {email: "validEmail@gmail.com"},
        {}
      ]
      for (const body of bodyData) {
        const response = await request(app).post("/register").send(body)
        expect(response.statusCode).toBe(400)
      }
    })   
  })
  // describe("attempting to add a user to the DB that already exists", () => {
  // })
})