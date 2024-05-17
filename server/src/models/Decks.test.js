const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Deck } = require('.')
const { db } = require('../db/config')

let deck

beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name: 'Water Deck', xp: 500 })
})

afterAll(async () => await db.sync({ force: true }))

describe('decks', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  })

  it('is name correct', async () => {
    expect(deck.name).toBe('Water Deck')
  })

  it('has the correct xp', async () => {
    expect(deck.xp).toBe(500)
  })

  
})