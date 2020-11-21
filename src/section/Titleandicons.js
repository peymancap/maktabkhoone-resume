import React,{Component} from "react";
import Fullpage from "../component/fullpage";
import data from "../data.json";
import {SocialIcon} from "react-social-icons";
import "./Titleandicons.css"
import Downicon from "../component/downicon";
import SnowStorm from 'react-snowstorm';
import {Element, Link} from 'react-scroll';
export default class Titleandicons extends Component{
    render(){
        return(
            <Fullpage className="first">
                <SnowStorm/>
                <Element name="Titleandicons1" className="element">
                </Element>
                <h1 className="title">{data.title}</h1>
                <div><h2 className="subtitle">{data.subtitle}</h2></div>
                <div className="icon-warpper">
                    {Object.keys(data.links).map(key => {
                            return(
                                <div className="icon"><SocialIcon className="icon4" url={data.links[key]} /></div>
                            )
                        })
                    }
                </div>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-222} duration={500} delay={0}>
                    <Downicon/>
                </Link>
            </Fullpage>
        )
    }
}
// export default Fullpage