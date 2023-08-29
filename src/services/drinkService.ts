const URL = `${import.meta.env.VITE_BACK_END_SERVER_URl}/api/json/v1/1/`
// console.log(`${import.meta.env.VITE_BACK_END_SERVER_URl}`)

async function getAllDrinksByLetter(letter: string): Promise<any> {
  const apiUrl = `${URL}search.php?f=${letter}`
  const res = await fetch(apiUrl, {
    method: "GET",

  })
  console.log(await res.json())

}

// getAllDrinksByLetter('a')


export {
  getAllDrinksByLetter
}