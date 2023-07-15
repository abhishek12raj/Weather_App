import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import pic from './pic.jpg'
import logo from './logo.jpg'
function App() {
  // const Bydefault=()=>{
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=fb07fe7a0a45ec8ee92868a703dcba9d`).then((result)=>{
  //     console.log(result)
  //   })
  // }
 
  const [inpvalue,setInpvalue]=useState()
 const [print,setPrint]=useState(false)
 const[temp,setTemp]=useState()
 const [humidity,setHumidity]=useState()
 const [wind,setWind]=useState()
 const [code,setCode]=useState()
 const [name,setName]=useState()
 const [show,setShow]=useState(false)
 
 
  function getvalue(e){

setInpvalue(e.target.value)

  }
  
//   useEffect(()=>{
// Bydefault();
//   },[])
  const getdata=()=>{
    setPrint(true)
   
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inpvalue}&appid=fb07fe7a0a45ec8ee92868a703dcba9d`).then((response)=>{
      console.log(response)
    setTemp((response.data.main.temp-273).toFixed(2))
setHumidity(response.data.main.humidity)
setWind(response.data.wind.speed)
setCode(response.data.sys.country)
setName(response.data.name)
setShow(true)
    })
    
  }

  return (
   <>
   <div className='main'>
   <div className='left'>
    
   
   </div>
   <div className='right'>
    <div className='obj'>
      <img className='logo' src={logo}/>
   <input className='serchbox' onChange={getvalue} value={inpvalue} type='text' placeholder='Search your city..'/>
   
   <button className='btn' onClick={getdata}>Search</button>
   <div className='temp'>
   
<br/>
  <br/>
  <br/>
   {show?<h1>{temp}°C</h1>:null}
   <hr/>
   </div>
   {show? <>
<hr/>
<br/>
  
  <br/>
  <h2 className='temp'>{name}({code})</h2>
  <hr/>
  <br/>
  <h2 className='temp'>Humidity is :{humidity}</h2>
  <hr/>
  <br/>
  <h2 className='temp'>Wind :{wind}km/hr</h2>
  <hr/>

  </>:null}
  
   <h3 className='show'>{show}</h3>
  
   </div>
   </div>
   </div>
   </>
  )
  }
export default App
