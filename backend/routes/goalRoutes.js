const express = require('express');
const { 
    getGoals, 
    setGoals, 
    updateGoals, 
    deleteGoals } = require('../controllers/goalController');

const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

//setting up the route of C-R-U-D operation
router.route('/').get(protect, getGoals).post(protect, setGoals);
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals);

//another way of setting the route of CRUD operations
/* router.get('/', getGoals);
   router.post('/', setGoals)
   router.put('/:id', updateGoals)
   router.delete('/:id', deleteGoals) */

module.exports = router;