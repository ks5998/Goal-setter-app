const asyncHandler = require('express-async-handler');

//here I am refactoring the C-R-U-D operations

//@desc GET goal
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(
    async (req, res)=>{
        res.status(200).json({ message: 'Get Goals' });
    }
) 

//@desc SET goal
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler(
    async (req, res)=>{
        if(!req.body.text){
            res.status(400)
            throw new Error('Bad request');
        }
        res.status(200).json({ message: 'Set Goals' });
    }
) 

//@desc UPDATE goal
//@route PUT /api/goals/:id
//@access Private
const updateGoals = asyncHandler(
    async (req, res)=>{
        res.status(200).json({ message: `Update Goal ${req.params.id}` });
    }
)

//@desc DELETE goal
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = asyncHandler(
    async (req, res)=>{
        res.status(200).json({ message: `Delete Goal ${req.params.id}` });
    }
)

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}