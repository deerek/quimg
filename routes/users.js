const express = require('express');

const usersRouter = express.Router();
const User = require('../models/users');

usersRouter.route("/")
    .get((req, res) => {
        User.find((err, users) => {
            if (err) return res.status(500).send(err);
            res.send(users);
        });
    })
    .post((req, res) => {
        const newUser = new User(req.body);
        newUser.save((err, savedUser) => {
            if (err) return res.status(500).send(err);
            return res.status(201).send(savedUser);
        });
    })


////////// ADD ROUTE FOR FOLLOWING USER + COUNTING NEW FOLLOWER

usersRouter.route("/:id")
    .get((req, res) => {
        User.findById(req.params.id, (err, foundUser) => {
            if (err) return res.status(500).send(err);
            res.send(foundUser);
        });
    })
    .delete((req, res) => {
        User.findOneAndRemove(req.params.id, (err, foundUser) => {
            if (err) return res.status(500).send(err);
            res.status(204).send();
        });
    })
    .put((req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
            if (err) return res.statu(500).send(err);
            return res.status(200).send(updatedUser);
        });
    })

module.exports = usersRouter;