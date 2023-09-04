const URL = `${import.meta.env.VITE_BACK_END_SERVER_URl}/api/json/v1/1/`

async function getAllDrinksByLetter(letter: string): Promise<any> {
  const apiUrl = `${URL}search.php?f=${letter}`
  const res = await fetch(apiUrl)
  if (!res.ok) {
    throw new Error('Error picking a random')
  }
  const data = await res.json()
  return data
}


async function getDrinksByAlcohol(spirit:string): Promise<any> {
  const apiUrl = `${URL}filter.php?i=${spirit}`
  const res = await fetch(apiUrl)
  if (!res.ok) {
    throw new Error('Error picking a random')
  }
  const data = await res.json()
  return data
}

async function searchByName(query: string): Promise<any> {
  const apiUrl = `${URL}search.php?s=${query}`
  const res = await fetch(apiUrl)
  if (!res.ok) {
    throw new Error('Error picking a random')
  }
  const data = await res.json()
  return data
}

async function randomPick(): Promise<any> {
  const apiUrl = `${URL}random.php`
  const res = await fetch(apiUrl)
  if (!res.ok) {
    throw new Error('Error picking a random')
  }
  const data = await res.json()
  return data
}

async function getDetails(id: string): Promise<any> {
  const apiUrl = `${URL}lookup.php?i=${id}`
  const res = await fetch(apiUrl, {
    method: "GET"
  })
  if (!res.ok) {
    throw new Error('Error picking a random')
  }
  const data = await res.json()
  return data
}

export {
  getAllDrinksByLetter,
  getDrinksByAlcohol,
  searchByName,
  randomPick,
  getDetails
}