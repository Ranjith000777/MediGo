import React from 'react'
import {Component} from 'react'

class InMount extends Component{

    constructor(props){
        super(props)

        this.state={
            name:"viji"
        }
        console.log ("constructor called")
    }
    componentDidMount(){
        console.log("Component did not mount")
    }
    render()
    {
        console.log("render called")
        return(
            <div>Hi</div>
        )
    }

}

export default InMount