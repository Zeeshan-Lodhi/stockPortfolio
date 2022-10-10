const express = require('express');
const app = express();
const cors = require(`cors`);

const admin = require("firebase-admin");
const credentials = require("./key.json");
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});
const db = admin.firestore();


app.post('/stock/create', async (req, res) => {
    try {
        const stockId = new Date().getTime().toString()
        const userJson = {
            stockId,
            date: req.body.date,
            security: req.body.security,
            action: req.body.action,
            quantity: "$" + req.body.quantity,
            price: "$" + req.body.price,
            total: "$" + req.body.quantity * req.body.price,
        };
        const response = await db.collection("stock").add(userJson);
        res.send(response);
    } catch (error) {
        res.send(error);
    }
})

app.get('/stock/read', async (req, res) => {
    try {
        const usersRef = db.collection("stock");
        const response = await usersRef.get();
        let responseArr = [];
        response.forEach(doc => {
            responseArr.push(doc.data());
        });
        res.send(responseArr);
    } catch (error) {
        res.send(error);
    }
})


app.get('/stock/read/:id', async (req, res) => {
    try {
        const userRef = db.collection("stock").doc(req.params.id)
        const response = await userRef.get();
        res.send(response.data());
    } catch (error) {
        metadata
        res.send(error);
    }
})


app.post('/stock/update', async (req, res) => {
    try {
        const id = req.body.id;
        const newFirstName = req.body.firstName;
        const userRef = await db.collection("stock").doc(id).update({ firstName: newFirstName });
        res.send(userRef);
    } catch (error) {
        res.send(error);
    }
})


app.delete('/stock/delete/:id', async (req, res) => {
    try {
        const response = await db.collection("stock").doc(req.params.id).delete();
        res.send(response);
    } catch (error) {
        res.send(error);
    }
})

app.listen(8000, () => {
    console.log('Server is running at port 8000');
});