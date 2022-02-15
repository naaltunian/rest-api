const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                  <img height='100px' src="/fruit.1" alt="fruit" />
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
            </main>
      </Def>
    )
  }

module.exports = home