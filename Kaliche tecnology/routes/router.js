const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

//router para las vistas
router.get('/', authController.isAuthenticated, (req, res)=>{    
    res.render('index', {user:req.user})
})
router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})
router.get('/register', (req, res)=>{
    res.render('register')
})

router.get('/ComponentProductos', (req, res)=>{
    res.render('ComponentProductos')
})

router.get('/perfil', (req, res)=>{
    res.render('perfil')
})


//router para los métodos del controller
router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/logout', authController.logout)
router.get('/tareas', authController.logout)


module.exports = router