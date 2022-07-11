const express = require('express');
const { 
    getGoals, 
    setGoals, 
    updateGoals, 
    deleteGoals } = require('../controllers/goalController');

const router = express.Router();

//setting up the route of C-R-U-D operation
router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(updateGoals).delete(deleteGoals);

//another way of setting the route of CRUD operations
/* router.get('/', getGoals);
   router.post('/', setGoals)
   router.put('/:id', updateGoals)
   router.delete('/:id', deleteGoals) */

module.exports = router;