const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { User, Deck, Card, Attack } = require('.')
const db = require('../db/config')

describe("user and deck", () => {
    it("has a one-to-one association", async () => {
        const user = await User.create({
            username: "Gandalf"
        })

        const deck = await Deck.create({
            name:"Water Deck",
            xp: 500
        })

        await user.setDeck(deck)

        const associatedDeck = await user.getDeck()
        expect(associatedDeck.UserId).toBe(user.id)

    })
})


describe("deck and card", () => {
    it("has a one-to-many association", async () => {
        const deck = await Deck.create({
            name:"Water Deck",
            xp: 500
        })

        const card = await Card.create({
            name: "Fire Lord",
            mojo: 5,
            stamina: 6
        })

        await deck.addCard(card)

        const associatedCards = await deck.getCard()
        expect(associatedCards.name).toBe("Fire Lord")

    })

})


describe("card and attack", () => {
    it("has a many-to-many association", async () => {
        const card = await Card.create({
            name: "Fire Lord",
            mojo: 5,
            stamina: 6
        })

        const attack = await Attack.create({
            title: "Fire Bolt",
            mojoCost: 3,
            staminaCost: 5
        })

        await card.addAttack(attack)
        await attack.addCard(card)

        const associatedAttacks = await card.getAttacks()
        expect(associatedAttacks).toHaveLength(1)
        expect(associatedAttacks[0].title).toBe("Fire Bolt")

        const associatedCards = await attack.getCards()
        expect(associatedCards).toHaveLength(1)
        expect(associatedCards[0].name).toBe("Fire Lord")


    })
})
