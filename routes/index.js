const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')

router.post('/auth', authController.auth)
router.get('/register', (req, res) => {
    res.render('register')
})
router.get('/test', (req, res) => {
    res.render('test')
})
router.get('/search', (req, res) => {
    res.render('search')
})
router.get('/trade', (req, res) => {
    res.render('trade')
})
router.get('/login', (req, res) => {
    if (req.session.loggedin) {
        res.redirect('/')
    } else {
        res.render('login')
    }
})
router.get('/', (req, res) => {
    if (req.session.loggedin) {
        res.render('main')
    } else {
        res.redirect('/login')
    }
    res.end()
})
module.exports = router
