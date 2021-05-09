import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './pokemon.css'

const PokemonCard = () => {

  const [num, setNum] = useState()
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    // alert("Hye.")
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
      console.log(res.data.name);
      setName(res.data.name)
      setMoves(res.data.moves.length)

    }
    getData();
  })

  return(
    <>
    <h1>This is pokenmon API call section.</h1>
    <select value={num} onChange={(e) => {
      setNum(e.target.value)
    }}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="25">25</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>

    <h1>My name is <span>{name}</span></h1>
    <h1>I have <span>{moves}</span> moves</h1>
    </>
  )
}

export default PokemonCard;