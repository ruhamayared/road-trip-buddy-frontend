import { useState, useEffect, createContext } from "react"
import { Link, Form } from "react-router-dom"
import Pen from "../components/img/pen.png"
// import Trashcan from "../components/img/trashcan.png"
// import { indexLoader } from "../loaders"


export default function Header(){

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
                return(
                <li className="place" id="place">
                    <Link to={`/${place._id}`}>
                        <p>{place.place}</p>
                    </Link>
                    <div className="places-buttons">
                        <Link to={`/${place._id}`}>
                            <img className="pen" src={Pen} alt="pen" />
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
          .then(res => res.json())
          .then(
            (result) => {
            //   setIsLoaded(true);
              setPlaces(result);
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

   
    return(
        <div className="header">
            <p className="cName">Road Trip Buddy</p>
            <div className="navBar">
                <p>box1</p>
                <button onClick={handleToggle}>{navbarOpen ? "X" : "="}</button>
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    
                </ul>

            </div>
        </div>
    )
}



