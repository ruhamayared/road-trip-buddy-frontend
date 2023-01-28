const URL = "https://road-trip-buddy-backend.onrender.com"

export const indexLoader = async () => {
  const response = await fetch(URL + "/places")
  const places = await response.json()
  return places
}

export const showLoader = async ({ params }) => {
  const response = await fetch(URL + "/places/" + params.id)
  const place = await response.json()
  return place
}
