let id = 1
let purchases = [
    {
        id: id++,
        amount: 100,
        date: "4/10/19",
        category: "Entertainment",
        tags: ['irresponsible', 'beer', "party"],
        memo: "I bought a lot of beer!"},
    {
        id: id++,
        amount: 50,
        date: "4/11/19",
        category: "Transportation",
        tags: ['fuel', 'driving'],
        memo: "I bought a tank of gas."},   
    {
        id: id++,
        amount: 100,
        date: "3/10/19",
        category: "Food",
        tags: ['groceries', 'healthy'],
        memo: "I bought vegtables."},
    {
        id: id++,
        amount: 50,
        date: "4/27/19",
        category: "Transportation",
        tags: ['maintenance', "driving"],
        memo: "I got an oil change"},
    {
        id: id++,
        amount: 30,
        date: "2/11/19",
        category: "Food",
        tags: ['unhealthy', "irresponsible"],
        memo: "I bought fast food."},   
    {
        id: id++,
        amount: 75,
        date: "1/10/19",
        category: "Entertainment",
        tags: ['outdoor', 'biking', 'maintenance'],
        memo: "I bought some bike parts"},
    {
        id: id++,
        amount: 35,
        date: "4/11/19",
        category: "Transportation",
        tags: ['fuel', 'driving'],
        memo: "I bought a tank of gas."},
        {
            id: id++,
            amount: 100,
            date: "1/10/19",
            category: "Entertainment",
            tags: ['irresponsible', 'beer', 'party'],
            memo: "food for the party"},
        {
            id: id++,
            amount: 50,
            date: "8/11/19",
            category: "Entertainment",
            tags: ['outdoor', 'camping'],
            memo: "I bought some camping gear"},   
        {
            id: id++,
            amount: 100,
            date: "6/10/19",
            category: "Food",
            tags: ['fastfood', 'unhealthy'],
            memo: "mcdonalds"},
        {
            id: id++,
            amount: 50,
            date: "4/1/19",
            category: "Transportation",
            tags: ['maintenance', "driving"],
            memo: "I got new wiper blades."},
        {
            id: id++,
            amount: 30,
            date: "2/27/19",
            category: "Rent",
            tags: ['utilities', "fixed expenses"],
            memo: "I paid rent"},   
        {
            id: id++,
            amount: 75,
            date: "11/10/19",
            category: "Food",
            tags: ['irresponsible'],
            memo: "I got chipotle for lunch"},
        {
            id: id++,
            amount: 35,
            date: "7/11/19",
            category: "Transportation",
            tags: ['fuel', 'driving'],
            memo: "I bought a tank of gas."}
]

module.exports = {
    create: (req, res) => {
        let newPurchase = req.body
        newPurchase.id = id++
        purchases.push(newPurchase)
        res.send(purchases)
    },
    read: (req, res) => {
        res.send(purchases)
    },
    update: (req, res) => {
        let {id} = req.params
        let purchaseUpdate = req.body
        purchaseUpdate.id = id
        let index = purchases.findIndex(element => +element.id === +id)
        purchases.splice(index, 1, purchaseUpdate)
        res.send(purchases)
},
    delete: (req, res) => {
        let {id} = req.params
        let index = purchases.findIndex((element) => +element.id === +id)
        purchases.splice(index, 1)
        res.send(purchases)
    },
}