import React,{useEffect,useState} from "react"
import Titleandicons from "./section/Titleandicons";
import Aboutsection from "./section/about";
import Cardsection from "./section/cardsection";
import "./main.scss"
import data from "./data.json";
import {Link} from "react-scroll";
function App() {
    const [color,setcolor]=useState("white");
    useEffect(()=>{
        const currentthemecolor =localStorage.getItem("color");
        if (currentthemecolor){
            setcolor(currentthemecolor);
        }
    },[])
    const handleClick =()=>{
        color==="white"?setcolor("blue"):localStorage.setItem("blue",color)
        color==="blue"?setcolor("purple"):localStorage.setItem("purple",color)
        color==="purple"?setcolor("dimgrey"):localStorage.setItem("dimgrey",color)
        color==="dimgrey"?setcolor("white"):localStorage.setItem("white",color)
    }
  return (
      <div className={`app ${color}`}>
          <div><ul className="navbar" >
              <div className="icone-warpper2" >
                  <div className="icon2" >
                      <img src={data.icons.colorme} onClick={()=>handleClick()} alt="colorme"/>
                  </div>
              </div>
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={-222} duration={500} delay={0}>
                  <li className="nav-item"><h4>{data.section[0].title}</h4></li>
              </Link>
              <Link activeClass="active" to="Cardsection" spy={true} smooth={true} offset={0} duration={500} delay={0}>
                  <li className="nav-item"><h4>{data.section[1].title}</h4></li>
              </Link>
          </ul>
          </div>
      <Titleandicons />
      <Aboutsection />
      <Cardsection />
      <div className="footer">{data.footer}</div>
      </div>
  );
}

export default App;
