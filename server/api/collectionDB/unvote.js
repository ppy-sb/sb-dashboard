const { CollectionDB } = require('../../database/models.js')
module.exports = async (req, res, next) => {
  const collection = await CollectionDB.findOne({ slug: req.params.slug }).exec()
  if (!collection) {
    return res.json({
      successed: false
    })
  }
  const lastVote = req.session.votes.find(v => v.collection._id.toString() === collection._id.toString())
  if (!lastVote) {
    return res.json({
      successed: false,
      error: 'did not vote before'
    })
  }
  collection.vote.accumlate -= lastVote.vote
  collection.save().then((doc) => {
    if (lastVote) { req.session.votes = req.session.votes.filter(v => v !== lastVote) }
    res.json({
      successed: true,
      now: doc.vote.accumlate
    })
  }).catch((error) => {
    res.json({
      successed: false,
      error: error.stack
    })
  })
}
