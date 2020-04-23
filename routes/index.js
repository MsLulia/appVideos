const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs', {title: 'Videos Favoritos'})
});
router.get('/add', (req, res) => {
    res.render('add.ejs', {title: 'Agrega tu video'});
});
router.get('/category', (req, res) => {
    res.render('category.ejs', {title: 'Categorias'});
});
module.exports = router;
