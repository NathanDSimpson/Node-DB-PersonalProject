let id = 1
let purchases = [
    {
        id: id++,
        amount: 100,
        date: "4/10/19",
        category: "Food",
        tags: ['groceries'],
        memo: "I bought a lot of beer!"},
    {
        id: id++,
        amount: 50,
        date: "4/11/19",
        category: "Gas",
        tags: ['transportation'],
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
        console.log(req.params)
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