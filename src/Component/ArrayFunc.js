import React, {Component} from 'react'

export default class PropsClass extends Component{
    render(){
        return(
            <div><h1>I Like {this.props.moviename} and {this.props.moviename2}</h1></div>
        )
    }
}
