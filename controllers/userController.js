exports.home = async (req, res) => {
  const locals = {
    title: 'UserNexa',
    description: 'Free NodeJs User Management System'
  }
  res.render('index', locals);
}

exports.addUser = async (req, res) => {
  const locals = {
    title: 'Add User',
    description: 'Free NodeJs User Management System'
  }
  res.render('users/addUser', locals);
}