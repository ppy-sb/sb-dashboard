module.exports = (req, res, next) => {
  const lastVote = req.session.votes.find(v => v.collection.slug === req.params.slug)
  if (!lastVote) { return res.json(null) }
  res.json({
    vote: lastVote.vote
  })
}
