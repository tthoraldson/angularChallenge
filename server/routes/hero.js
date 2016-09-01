var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');

router.get('/', function (req, res) {
  Hero.find({}, function (err, heros) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(heros);
  });
});

router.post('/', function (req, res) {
  console.log('POST', req.body);
  var hero = Hero(req.body);
  hero.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201); // CREATED
  });
});

router.delete('/:id', function (req, res) {
  var id = req.params.id;
  Hero.findByIdAndRemove(id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});


module.exports = router;
