let id = 1
let purchases = [
    {
        id: id++,
        amount: 100,
        date: "4/10/19",
        category: "Entertainment",
        tags: ['irresponsible', 'beer'],
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
        memo: "veggies"},
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
        tags: ['recreation', 'biking', 'maintenance'],
        memo: "I bought some bike parts"},
    {
        id: id++,
        amount: 35,
        date: "4/11/19",
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