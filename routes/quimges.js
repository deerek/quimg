const express = require('express');

const quimgesRouter = express.Router();
const Quimg = require('../models/quimges');

quimgesRouter.route("/")
    .get((req, res) => {
        Quimg.find((err, quimges) => {
            if (err) return res.status(500).send(err);
            res.send(quimges);
        });
    })
    .post((req, res) => {
        const newQuimg = new Quimg(req.body);
        newQuimg.save((err, savedQuimg) => {
            if (err) return res.status(500).send(err);
            return res.status(201).send(savedQuimg);
        });
    })

//////// ADD ROUTE FOR LIKING A QUIMG

quimgesRouter.route("/:id")
    .get((req, res) => {
        Quimg.findById(req.params.id, (err, foundQuimg) => {
            if (err) return res.status(500).send(err);
            res.send(foundQuimg);
        });
    })
    .delete((req, res) => {
        Quimg.findByIdAndRemove(req.params.id, (err, foundQuimg) => {
            if (err) return res.status(500).send(err);
            res.status(204).send();
        });
    })
    .put((req, res) => {
        Quimg.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedQuimg) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(updatedQuimg);
        });
    })

module.exports = quimgesRouter;