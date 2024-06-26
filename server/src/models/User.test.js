const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User } = require('.')
const { db } = require('../db/config')

let user

beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({ username: 'gandalf' })
})

afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  it('has an id', async () => {
    expect(user).toHaveProperty('id')
  })

  it('is username correct', async () => {
    expect(user.username).toBe('gandalf')
  })

 
  
})
