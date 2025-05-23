import React, { useState,useEffect } from 'react'
import { NavLink,Link} from 'react-router-dom'
import "../style/App.css"

function Navbar(){
   const [Show,setShow] = useState(false)

   function Menu(){
      setShow(!Show)
   }
        
   useEffect(()=>{
    const handleScroll = () =>{
      setShow(false)
    }
    window.addEventListener("scroll",handleScroll)
   },[])

    return(
     
   <>
  <nav>
  <div className="">
    <NavLink to="/"><h2>GitHubSearch</h2></NavLink>
     
   </div>
    <ul className='menu-items'>
      <li>
              <a href="https://wa.me/2349126785031?text=I%20Want%20to%20Hire%20A%20Developer" target='_blank'>Hire a Developer</a>
              </li>
      
    </ul>

    <div className={ "menu"} onClick={Menu}>
     <div className="bar bar1"></div>
     <div className="bar bar2"></div>
     <div className="bar bar3"></div>
    </div>       
    </nav> 


    
    { Show && ( <div className="dropdown">
            <ul>
              <li>
              <a href="https://wa.me/2349126785031?text=I%20Want%20to%20Hire%20A%20Developer" target='_blank'>Hire a Developer</a>
              </li>
            </ul>
          </div>
         ) }
  
        </>
    )
}


export default Navbar