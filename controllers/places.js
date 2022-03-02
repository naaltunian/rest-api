const router = require('express').Router()
const Place = require('../models/places')
const Comments = require('../models/comments')

router.get('/', async (req, res) => {
  try {
    const places = await Place.find()
    res.render('places/index', { places })
  } catch (error) {
    res.send('error')
  }
})

router.get('/github', async (req, res))

router.post('/', async (req, res) => {
  try {
    const places = await Place.create(req.body)
    res.redirect('/places')
  } catch (error) {
    res.render('places/new', { message: error.toString() })
  }
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', async (req, res) => {
  try {
    const place = await Place.findById(req.params.id).populate('comments')
    res.render('places/show', { place })
  } catch (error) {
    console.log(error)
    res.send('show error')
  }
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router