const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('.')
const { db } = require('../db/config')

let card

beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ name: 'fireball' })
})

afterAll(async () => await db.sync({ force: true }))

describe('card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  })

  it('is name correct', async () => {
    expect(card.name).toBe('fireball')
  })

 
  
})
