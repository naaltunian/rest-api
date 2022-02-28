const mongoose = require('mongoose')
require('dotenv').config({ path: "../.env" })

const Place = require('../models/places')
const Comment = require('../models/comments')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

async function seed() {
    let place = await Place.findOne({ name: "H-Thai-ML" })
    console.log(place)

    let comment = await Comment.create({
        author: 'Famished Fran',
        rant: "false",
        stars: 5.0,
        content: 'Wow, so good'
    })

    place.comments.push(comment._id)

    await place.save()

    process.exit()
}

seed()

// Place.create([{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/food.jpg',
//     founded: 1989
// }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/food.jpg',
//     founded: 2020
// }]).then(() => console.log('success')).catch(err => console.log(err))