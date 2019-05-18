const db = require("../models");

module.exports = {
  findUser: (req, res) => {
    db.User
    .findAll({})
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err))
  },
  findByUserId: (req, res) => {
    db.User
      .findOne({
        where: {email: req.params.email}
      })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  createUser: (req, res) => {
    db.User
    .create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })
  },
  updateUser: (req, res) => {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  removeUser: (req, res) => {
    db.User
      .destroy({ 
        where: {
          id: req.params.id
        } 
      })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  findPost: (req, res) => {
    db.Post
    .findAll({})
    .then(dbPost => res.json(dbPost))
    .catch(err => res.status(422).json(err))
  },
  findByPostId: (req, res) => {
    db.Post
      .findOne({
        where: {id: req.params.id}
      })
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },
  createPost: (req, res) => {
    db.Post
    .create({
      postTitle: req.body.postTitle,
      postText: req.body.postText,
      fkPostUserID: req.body.fkPostUserID,
      postStatus: req.body.postStatus
    })
    .then(dbPost => res.json(dbPost))
    .catch(err => res.status(422).json(err));
  },
  updatePost: (req, res) => {
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },
  removePost: (req, res) => {
    db.Post
      .destroy({ 
        where: {
          id: req.params.id
        } 
      })
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },

  findPortfolio: (req, res) => {
    db.UserPortfolio
    .findAll({})
    .then(dbPortfolio => res.json(dbPortfolio))
    .catch(err => res.status(422).json(err))
  },
  findByPortfolioId: (req, res) => {
    db.UserPortfolio
      .findOne({
        where: {id: req.params.id}
      })
      .then(dbUserPortfolio => res.json(dbUserPortfolio))
      .catch(err => res.status(422).json(err));
  },
  createPortfolio: (req, res) => {
    db.UserPortfolio
    .create({
      name: req.body.name,
      address: req.body.address,
      rating: req.body.rating,
      userid: req.body.userid,
      companion: req.body.companion
    })
    .then(dbPortfolio => res.json(dbPortfolio))
    .catch(err => res.status(422).json(err));
  },
  updatePortfolio: (req, res) => {
    db.UserPortfolio
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbPortfolio => res.json(dbPortfolio))
      .catch(err => res.status(422).json(err));
  },
  removePortfolio: (req, res) => {
    db.UserPortfolio
      .destroy({ 
        where: {
          id: req.params.id
        } 
      })
      .then(dbUserPortfolio => res.json(dbUserPortfolio))
      .catch(err => res.status(422).json(err));
  }
};