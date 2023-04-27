var express = require('express');
var router = express.Router();

// /* GET Order listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const { Order, User, Basket } = require('../models');

// Create a new basket
router.post('/', async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error creating item', error });
  }
});

// Get all Items, including associated items
router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll(); // how can we include the ITEM associated with the Orders in this response?
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving Items', error });
  }
});

// Get a specific item by ID, including associated items
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id); // how can we include the ITEM associated with the Items in this response?

    if (!order) {
      res.status(404).json({ message: 'Item not found' });
    } else {
      res.json(order);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving item', error });
  }
});

// Update a item by ID
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Order.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updateOrder = await Order.findByPk(req.params.id);
      res.json(updateOrder);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating item', error });
  }
});

// Delete a item by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Order.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(204).json({ message: 'Item deleted' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error });
  }
});

module.exports = router;