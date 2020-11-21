import React,{Component} from "react";
import data from "../data.json";
import Fullpage from "../component/fullpage";
import Skillcard from "../component/skillcard";
import Upicone from "../component/upicone";
import "./cardsection.css"
import {Element, Link} from "react-scroll";
export default class Cardsection extends Component{
    render(){
        return(
            <Fullpage className="third">
                <Element name="Cardsection" className="element">
            </Element>
                <h3 id="skill">{data.section[1].title}</h3>
                <div className="cards-warpper">
                    {data.section[1].item.map(eachskill=>{
                        return(
                            <Skillcard skill={eachskill} />
                        )
                    })}
                </div>
                    <Link activeClass="active" to="Titleandicons1" spy={true} smooth={true} offset={-190} duration={500} delay={0}>
                        <Upicone/>
                    </Link>
            </Fullpage>
        );
    }
}