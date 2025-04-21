import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import {originals,action, horrorMovie, comedyMovie} from './urls'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title ='Action' isSmall/>
      <RowPost url={horrorMovie} title ='Horror' isSmall/>
      <RowPost url={comedyMovie} title ='Comedy' isSmall/>

    </div>
  )
}

export default App
