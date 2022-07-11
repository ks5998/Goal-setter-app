//import asyncHandler, Goal, 
const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalModel');

//here I am refactoring the C-R-U-D operations

//@desc GET goal
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(
    async (req, res)=>{
        const goals = await Goal.find();
        res.status(200).json(goals);
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
        const goal = await Goal.create({
            text: req.body.text,
        })
        res.status(200).json(goal);
    }
) 

//@desc UPDATE goal
//@route PUT /api/goals/:id
//@access Private
const updateGoals = asyncHandler(
    async (req, res)=>{
        const goal = await Goal.findById(req.params.id);
        if(!goal){
            res.status(400);
            throw new Error('Goal not found');
        }
        const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.status(200).json(updatedGoal);
    }
)

//@desc DELETE goal
//@route DELETE /api/goals/:id
//@access Private
const deleteGoals = asyncHandler(
    async (req, res)=>{
        const goal = await Goal.findById(req.params.id);
        if(!goal){
            res.status(400);
            throw new Error('Goal not found');
        }
        await goal.remove();
        res.status(200).json({ id: req.params.id });
    }
)

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}