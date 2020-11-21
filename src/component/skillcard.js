import React,{Component} from "react";
import "./skillcard.scss"
export default class Skillcard extends Component{
    render(){
        const {skill}=this.props
        return(
                <div className="cards">
                    <div className="img-warpper"><img src={skill.content.img} alt="none"/></div>
                    <div className="skill-title-warpper"><h4>{skill.content.title}</h4></div>
                </div>

        );
    }
}