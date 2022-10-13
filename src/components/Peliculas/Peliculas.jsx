import React from 'react'
import PeliculasTarjeta from './PeliculasTarjeta/PeliculasTarjeta'
import './Peliculas.css'

const peliculasInfo=[
  {
    id:"1",
    name:"Viernes 13",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
  {
    id:"2",
    name:"Predador",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
{
  id:"3",
  name:"Los simpsons",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/u8BMLmwoc7YPHKSWawOOqC1c8lJ.jpg",
},
 {
  id:"3",
  name:"Viernes 13",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
 {
  id:"4",
  name:"Viernes 13",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
{
  id:"4",
  name:"Viernes 13",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
{
  id:"4",
  name:"Viernes 13",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
{
  id:"4",
  name:"Viernes 13",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
{
  id:"4",
  name:"Viernes 13",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
{
  id:"4",
  name:"Viernes 13",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
{
  id:"4",
  name:"Viernes 13",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
{
  id:"4",
  name:"Viernes 13",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
{
  id:"4",
  name:"Viernes 13",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
{
  id:"4",
  name:"Viernes 13",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
{
  id:"4",
  name:"Viernes 13",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
{
  id:"4",
  name:"Viernes 13",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
{
  id:"4",
  name:"Viernes 13",
  urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/wYQA4UwVLaI4Sf0d5IXEhGO2Ueh.jpg",
},
]
const Peliculas = () => {
  return (
    <div className='contenedor-peliculas'>
      {
        peliculasInfo.map(pelicula=>(
          <PeliculasTarjeta url={pelicula.urlImagen} name={pelicula.name}/>
        ))
      }
        
    </div>
  )
}

export default Peliculas