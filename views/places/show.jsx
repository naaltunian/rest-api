const React = require('react')
const Def = require('../default')

function show (data) {
  let comments
  if (data.place.comments.length) {
    comments = data.place.comments.map(comment => {
      return(
        <div className="border">
          <h2 className="rant">{comment.rant ? "Rant!" : "Rave!"}</h2>
          <h4>{comment.content}</h4>
          <h3>
            <strong>- {comment.author}</strong>
          </h3>
          <h4>Rating: {comment.stars}</h4>
        </div>
      )
    })
  } else {
    comments = (
      <h3 className="inactive">
      No comments yet
    </h3>
    )
  }
  
    return (
        <Def>
  <main>
    <div className="row">
      <div className="col-sm-6">
        <img src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
      </div>
      <div className="col-sm-6">
        ...
        <h2>
          Description
        </h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
        <h2>
          Comments
        </h2>
        {comments}
        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>  
            <form action={`/places/${data.place.id}?_method=DELETE`} method="POST" > 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
    </div>
    </div>
  </main>
</Def>
    )
}



module.exports = show