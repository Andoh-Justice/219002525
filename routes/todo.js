const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('NOT AVAILABLE')
});

module.exports = router;