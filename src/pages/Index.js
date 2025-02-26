import { Form, Link, useLoaderData } from "react-router-dom"
import Mountain from "../components/img/mountain-trees.jpg"

function Index(props) {
  const places = useLoaderData()

  return (
    <div>
      <img className="index-background" src={Mountain} alt="mountain with trees and fog"></img>

      <div className="container">
        <h1 className="index-h1" id="index-h1">
          Places to Visit
        </h1>
        {places.map((place, idx) => (
          <div className="place" id="place" key={idx}>
            <Link style={{ textDecoration: "none" }} to={`/${place._id}`}>
              <h1>{place.place}</h1>
            </Link>
          </div>
        ))}
      </div>

      <div className="add-container">
        <div className="add">
          <h2>Add a place you want to visit:</h2>
          <Form action="/create" method="post">
            <input type="input" name="place" placeholder="Place to visit" />
            <input type="input" name="cityState" placeholder="City, State" />
            <input type="input" name="address" placeholder="Address" />
            <input type="input" name="url" placeholder="Website URL" />
            <input type="input" name="image" placeholder="Image URL" />
            <input type="input" name="notes" placeholder="Notes" />
            <input type="submit" value="Add a Place to List" />
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Index
