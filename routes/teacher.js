const express = require('express');
const router = express.Router();

// Student model
const Teachers = require('../models/teachers');

// @route   GET /api/teachers/
// @desc    Get all teachers
// @access  Public
router.get('/', async (req, res) => {
  try {
	  const teachers = await Teachers.find({});
	  res.send({ teachers })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/teachers/:id
// @desc    Get a specific teacher
// @access  Public
router.get('/:id', async (req, res) => {
  try {
	  const student = await Teachers.findById(req.params.id);
    res.send({ student });
  } catch (err) {
    res.status(404).send({ message: 'Teacher not found!' });
  }
});

// @route   POST /api/teacher/
// @desc    Create a teacher
// @access  Public
router.post('/', async (req, res) => {
  try {
	  const newTeacher = await Teachers.create({ name: req.body.name, email: req.body.email, enrollnumber: req.body.enrollnumber });
	  res.send({ newTeacher });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});

// @route   PUT /api/teachers/:id
// @desc    Update a teacher
// @access  Public
router.put('/:id', async (req, res) => {
  try {
	  const updatedTeacher = await Teachers.findByIdAndUpdate(req.params.id, req.body);
     res.send({ message: 'The teacher was updated' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/teachers/:id
// @desc    Delete a teacher
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
	  const removeTeacher = await Teachers.findByIdAndRemove(req.params.id);
	res.send({ message: 'The teacher was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});


module.exports = router;
