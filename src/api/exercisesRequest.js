import axios from "axios";

const exercise = axios.create({
    baseURL: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises/',
    headers: {'X-RapidAPI-Key': '1ef426d8d8msh083a78b8369e3aap1cc7c7jsnd1a9b9a9daa6', 'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'}
})

export default exercise