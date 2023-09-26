const User = require('../models/Users')
const mongoose = require('mongoose')



exports.home = async (req, res) => {
  const messages = await req.consumeFlash('info');

  const locals = {
    title: 'UserNexa',
    description: 'Free NodeJs User Management System'
  }
  res.render('index', {locals, messages});
}

exports.addUser = async (req, res) => {
  const locals = {
    title: 'Add User',
    description: 'Free NodeJs User Management System'
  }
  res.render('users/addUser', locals);
}

exports.postUser = async (req, res) => {
  console.log(req.body)

  const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      details: req.body.details,
      tel: req.body.tel,
      email: req.body.email,
  });

  try {
    await User.create(newUser)
    await req.flash("info", "New user has been added.");

    res.redirect('/usernexa');
  } catch(error){
    console.log(error) 
  }
}