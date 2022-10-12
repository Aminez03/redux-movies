import React from 'react'
import { useDispatch } from 'react-redux'
import { hendelDelete } from '../redux/actions'

import StarRating from './StarRating'

function MoviesCard({film,deleteMovie,handleEdit}) {
  const dispatch=useDispatch()
  return (
    <div className='movieCard'>
        <h1> {film.name}</h1>
        <img src={film.image} alt={film.image} />
        <div className='blaka'>
        <div className='etoile'><StarRating rating={film.rating}/></div>
        <p>{film.date}</p>
        <button id='btn' onClick={()=>{dispatch(hendelDelete(film.id))}}>Delete</button>
       
        </div>
        
    </div>
  )
}

export default MoviesCard