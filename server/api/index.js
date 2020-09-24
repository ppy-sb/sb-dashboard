const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

router.use((req, res, next) => {
  console.log(req.session.id, req.session)
  if (!req.session.votes) { req.session.votes = [] }
  next()
})
router.post('/collectionDB/upload', bodyParser.json({ limit: '50mb' }), require('./collectionDB/upload'))
router.get('/collectionDB/search/:name', require('./collectionDB/search'))
router.get('/collectionDB/get/:slug', require('./collectionDB/read'))
router.get('/collectionDB/upvote/:slug', require('./collectionDB/upvote'))
router.get('/collectionDB/downvote/:slug', require('./collectionDB/downvote'))
router.get('/collectionDB/myvote/:slug', require('./collectionDB/myvote'))
router.get('/collectionDB/unvote/:slug', require('./collectionDB/unvote'))
router.get('/collectionDB/recent', require('./collectionDB/recent'))
router.get('/collectionDB/top', require('./collectionDB/top'))
router.get('/slug/*', require('./slug'))

module.exports = router
