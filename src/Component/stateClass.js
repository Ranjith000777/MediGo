import React, { Component } from 'react'

export default class StateClass extends Component {
    state = {
        name:"" ,
        age:""
    }
    changeName = (eN) => {this.setState({name:eN.target.value})}
    changeAge = (eA) => {this.setState({age:eA.target.value})}
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <input type="text" onChange={this.changeName}/>
                <input type="text" onChange={this.changeAge}/>
                <h1>{this.state.age}</h1>
            </div>
        )
    }
}
