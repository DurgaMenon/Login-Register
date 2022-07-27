var express = require('express');
var router = express.Router();
var producthelper = require('../helpers/product-helpers');
const userHelpers = require('../user-helpers');
router.get('/', async function(req, res, next) {
    producthelper.getAllProducts().then((products)=>{
        res.render('user/view-products',{products})
      })
    });
    router.get('/login',(req,res)=>{
        res.render('user/login', loginErr=true)
    })

    router.post('/login',(req,res)=>{
        userHelpers.doLogin(req.body)
      })
      
      router.get('/signup',(req,res)=>{
        res.render('user/signup')
      })

      router.post('/signup',(req,res)=>{
        userHelpers.doSignup(req.body).then((response)=>{
          //req.session.loggedIn=true
          //req.session.user=response
          //res.redirect('/')
          console.log(response);
        })
      })

    module.exports = router;
