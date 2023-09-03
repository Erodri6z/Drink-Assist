const URL = `${import.meta.env.VITE_BACK_END_SERVER_URl}/api/json/v1/1/`

async function getAllDrinksByLetter(letter: string): Promise<any> {
  const apiUrl = `${URL}search.php?f=${letter}`
  const res = await fetch(apiUrl, {
    method: "GET",

  })
  return await res.json()

}


async function getDrinksByAlcohol(spirit:string) {
  const apiUrl = `${URL}filter.php?i=${spirit}`
  const res = await fetch(apiUrl, {
    method: 'GET'
  })
  return await res.json()
}

async function searchByName(query: string) {
  const apiUrl = `${URL}search.php?s=${query}`
  const res = await fetch(apiUrl, {
    method: "GET"
  })
  return await res.json()
}

export {
  getAllDrinksByLetter,
  getDrinksByAlcohol,
  searchByName
}