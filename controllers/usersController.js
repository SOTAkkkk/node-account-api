const express = require('express');
const accounts = require("../models/accountsModel");
const router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
    const resJson = await accounts.getAllAccounts();
    res.send(resJson)
});

router.post('/', async function (req, res, next) {
    try {
        await accounts.createAccount(req.body.name);
        console.log(req.body)
        res.send('OK');
    } catch (error) {
        console.error('APIエラー:', error);
        res.status(500).send('Internal Server Error');
    }
})

router.put('/:id', async function (req, res, next) {
    try {
        await accounts.updateAccount(req.params.id, req.body.name);
        console.log(req.body)
        res.send('OK');
    } catch (error) {
        console.error('APIエラー:', error);
        res.status(500).send('Internal Server Error');
    }
})

router.delete('/:id', async function (req, res, next) {
    try {
        await accounts.deleteAccount(req.params.id);
        console.log(req.body)
        res.send('OK');
    } catch (error) {
        console.error('APIエラー:', error);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;
