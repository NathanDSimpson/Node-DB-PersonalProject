const express = require('express')

const PurchaseController = require('./controllers/PurchaseController')

const app = express()
const port = 4123

app.use(express.json()) // allows us to use req.body

app.post('/api/budget', PurchaseController.create)
app.get('/api/budget', PurchaseController.read)
app.put('/api/budget/:id', PurchaseController.update)
app.delete('/api/budget/:id', PurchaseController.delete)

app.listen(port, () => {
    console.log(`SERVER RUNNING ON PORT: ${port}.`)
})