import React,{Component} from "react";
import data from "../data.json";
import Fullpage from "../component/fullpage";
import Downicon from "../component/downicon";
import {Element, Link} from "react-scroll";
export default class Aboutsection extends Component{
    render(){
        return(
            <Fullpage className="second">
                <Element name="about" className="element">
                </Element>
                <h3 id="about">{data.section[0].title}</h3>
                <div className="paragraphs">
                    {data.section[0].item.map(p => {
                        return <p>{p.content}</p>;
                    })}
                </div>
                <Link activeClass="active" to="Cardsection" spy={true} smooth={true} offset={50} duration={500} delay={0}>
                    <Downicon/>
                </Link>
            </Fullpage>
        );
    }
}