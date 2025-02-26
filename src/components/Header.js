import { useState, useEffect } from "react"
import { Link, Form } from "react-router-dom"
import PlaceMarker from "./img/place-marker.png"
// import { indexLoader } from "../loaders"

export default function Header() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [placebarOpen, setPlacebarOpen] = useState(false)
  const [createbarOpen, setCreatebarOpen] = useState(false)
  const [places, setPlaces] = useState([])

  const handlePlaceListToggle = () => {
    setPlacebarOpen(!placebarOpen)
  }

  const handleCreateToggle = () => {
    setCreatebarOpen(!createbarOpen)
  }

  console.log(setTimeout(places, 5000), "<--- time out")

  const SliderContent = (props) => {
    if (places) {
      console.log(places, "<-- places in sliderContent") //
      return places.map((place) => {
        return (
          <li className="place" id="place">
            <img src={PlaceMarker} alt="place marker" className="placeMarker"></img>
            <Link to={`/${place._id}`}>
              <p>{place.place}</p>
            </Link>
            <div className="places-buttons">
              <Link to={`/${place._id}`}>
                <button className={"pen"}></button>
              </Link>
              <Form action={`/delete/${place._id}`} method="post">
                <button className={"trashCan"}></button>
              </Form>
            </div>
          </li>
        )
      })
    }
  }

  // useContext hook <- look into it
  // ^^^ a way to create global scope manager
  useEffect(() => {
    fetch("https://project-3-backend-cm7x.onrender.com/places")
      .then((res) => res.json())
      .then(
        (result) => {
          //   setIsLoaded(true);
          setPlaces(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          //   setIsLoaded(true);
          //   setError(error);
          console.log(error)
        }
      )
  }, [])

  return (
    <div className="header">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <p className="cName">Road Trip Buddy</p>
      </Link>
      <div className="navBar">
        {/* ---------- Create Toggle -----------  */}
        <button className="toggle-button" onClick={handleCreateToggle}>
          {createbarOpen ? "X" : "+"}
        </button>

        <ul className={`createNav ${createbarOpen ? "showCreateMenu" : ""}`}>
          <Form className="create-place" action="/create" method="post">
            <input type="input" name="place" placeholder="Place to visit" />
            <input type="input" name="cityState" placeholder="City, State" />
            <input type="input" name="address" placeholder="Address" />
            <input type="input" name="url" placeholder="Website URL" />
            <input type="input" name="image" placeholder="Image URL" />
            <input type="input" name="notes" placeholder="Notes" />
            <input type="submit" value="Add a Place to List" />
          </Form>
        </ul>

        {/* ---------- Place Toggle -----------  */}
        <button className="toggle-button" onClick={handlePlaceListToggle}>
          {placebarOpen ? "X" : "="}
        </button>

        <ul className={`menuNav ${placebarOpen ? "showMenu" : ""}`}>
          {places ? <SliderContent /> : <li>Loading...</li>}
        </ul>
      </div>
    </div>
  )
}
