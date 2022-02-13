const React = require('react')
const Def = require('../default')

function Index({ places }) {
    let formattedPlaces = places.map((place, index) => {
        return (
            <div key={index}>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name} />
            </div>
        )
    })
    return (
        <Def>
            <h1>places page</h1>
            {formattedPlaces}
        </Def>
    )
}

module.exports = Index