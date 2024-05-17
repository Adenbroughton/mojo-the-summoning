const User = require('./User');
const { Deck } = require('./Decks');
const { Card } = require('./Cards');
const { Attack } = require('./Attacks');


User.hasOne(Deck);
Deck.belongsTo(User);

async function findDeck(id) {
  
    const user = await User.findByPk(id);
    const deck = await user.getuser();
    return deck;
}

Deck.hasMany(Card);
Card.belongsTo(Deck);

async function findCard(id) {
    const deck = await Deck.findByPk(id);
    const card = await deck.getcard();
    return card;
}

Card.belongsToMany(Attack, { through: "CardAttack" });
Attack.belongsToMany(Card, { through: "CardAttack" });

async function addToCard(attackId, cardId) {
    const attack = await Attack.findByPk(attackId);
    const card = await Card.findByPk(cardId);
    await attack.addCard(card);
    return card;
  }
  async function addToAttack(cardId, attackId) {
    const card = await Card.findByPk(cardId);
    const attack = await attack.findByPk(attackId);
    await card.addAttack(attack);
    return attack;
  }



module.exports = { 
    findDeck,
    findCard,
    addToCard,
    addToAttack,
    User,
    Deck,
    Card,
    Attack
}
