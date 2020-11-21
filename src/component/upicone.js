import React,{Component} from "react";
import "./upicon.scss"
import data from "../data.json";
export default class Upicone extends Component{
    render(){
        return(
            <div className="icone-warpper3" >
                <div className="icon3"><img src={data.icons.up} alt="upicon"/></div>
            </div>
        );
    }
}