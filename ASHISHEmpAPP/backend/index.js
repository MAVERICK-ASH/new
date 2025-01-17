const express = require('express')

require('./connection')
const app = express()
app.use(express.json())
var empModel = require('./models/employee')
var cors = require('cors')
app.use(cors())

// api creation

app.get('/', (req, res) => { 
    res.send("hello world")
})

app.get('/view',async (req, res) => {
    try {
       var data=await empModel.find()
        res.send(data)
    }
    catch (error) {
        console.log(error)
    }
})

app.delete('/remove/:id', async (req, res) => {
    try {
    await empModel.findByIdAndDelete(req.params.id)
        res.send({ message: "Data deleted successfully" })
    }
    catch (error) {
    }
})
app.put('/up/:id', async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({ message: "Data updated successfully" })
    }
    catch (error) {
    }
})


app.post("/add", async (req, res) => {
    try {
        await empModel (req.body).save()
        res.send({ message: "Data Added" })
    }
    catch (error) {
            console.log(error)
        }
    }

)
                                        
app.get('/t', (req,res) => {
    res.send("this is trial")
})




// port setting
app.listen(3007, () => { 
    console.log("port is running")
})

