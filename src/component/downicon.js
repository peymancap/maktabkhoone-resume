import React,{Component} from "react";
import "./downicon.css"
import data from "../data.json";
export default class Downicon extends Component{
    render(porps){
        return(
            <div className="icone-warpper1" >
                <div className="icon1"><img src={data.icons.down} alt="downicon"/></div>
            </div>
        );
    }
}