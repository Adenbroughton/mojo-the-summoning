const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('.')
const { db } = require('../db/config')

let attack

beforeAll(async () => {
  await db.sync({ force: true })
  attack = await Attack.create({ title: 'Wizard' })
})

afterAll(async () => await db.sync({ force: true }))

describe('attack', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  })

  it('is title correct', async () => {
    expect(attack.title).toBe('Wizard')
  })

 
  
})
