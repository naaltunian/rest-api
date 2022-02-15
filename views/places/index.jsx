const React = require('react')
const Def = require('../default')

function Index({ places }) {
    let formattedPlaces = places.map((place, index) => {
        return (
            <div className="col-sm-6" key={index}>
                <h2>{place.name}</h2>
                <p className="text-center">{place.cuisines}</p>
                <img src={place.pic} alt={place.name} />
                <p className="text-center">Located in {place.city}, {place.state}</p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to rant and Rave About!</h1>
                <div className="row">
                    {formattedPlaces}
                </div>
            </main>
        </Def>
    )
}

module.exports = Index