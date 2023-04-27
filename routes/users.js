var express = require('express');
var router = express.Router();
const { authenticate } = require('../middlewares/auth');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

const { User, Order} = require('../models');

// Create a new User
router.post('/', authenticate, async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// Get all Users, including associated users
router.get('/', authenticate, async (req, res) => {
  try {
    const users = await User.findAll(); // how can we include the USER associated with the Users in this response?
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving Users', error });
  }
});

// Get a specific user by ID, including associated users
router.get('/:id', authenticate, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id); // how can we include the USER associated with the Users in this response?

    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error });
  }
});

// Update a user by ID
router.put('/:id', authenticate, async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedItem = await User.findByPk(req.params.id);
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
});

// Delete a user by ID
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(204).json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
});

module.exports = router;
