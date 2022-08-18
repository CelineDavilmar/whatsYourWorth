/* const { User } = require('../models');

const Users = {


    createUsers({ body }, res) {
        User.create(body)
            .then(dbUData => res.json(dbUData))
            .catch(err => res.status(400).json(err));
    },

    getAllUsers(req, res) {
        User.find()
            .select('-__v')
            .then(dbUData => res.json(dbUData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

};

module.exports = Users;  */