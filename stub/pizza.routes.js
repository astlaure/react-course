const express = require('express');

const router = express.Router();

router.get('/pizzas', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Cheese',
      price: '10.99',
      ingredients: [
        'cheese',
      ],
    },
    {
      id: 2,
      name: 'Pepperoni',
      price: '12.99',
      ingredients: [
        'cheese',
        'pepperoni',
      ],
    },
    {
      id: 3,
      name: 'Hawaiian',
      price: '15.99',
      ingredients: [
        'cheese',
        'ham',
        'pineapple',
      ],
    },
  ]);
});

module.exports = router;
