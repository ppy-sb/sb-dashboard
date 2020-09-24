const { CollectionDB } = require('../../database/models.js')
module.exports = async (req, res, next) => {
  const collection = await CollectionDB.findOne({ slug: req.params.slug }).exec()
  if (!collection) {
    return res.json({
      successed: false
    })
  }
  const lastVote = req.session.votes.find(v => v.collection._id.toString() === collection._id.toString())
  const duplicate = (lastVote) ? lastVote.vote === -1 : false
  const reverse = (lastVote) ? lastVote.vote === 1 : false
  if (lastVote && duplicate) {
    return res.json({
      successed: true,
      error: 'voted same before'
    })
  }
  collection.vote.accumlate -= 1
  if (reverse) { collection.vote.accumlate -= 1 }
  collection.save().then((doc) => {
    if (lastVote) { req.session.votes = req.session.votes.filter(v => v !== lastVote) }
    req.session.votes.push({ collection, vote: -1 })
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
