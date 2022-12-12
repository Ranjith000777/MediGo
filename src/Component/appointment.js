import React, { Component } from 'react'
import './st.css'
import bg from './bg.png'

export default class Appointment extends Component {
  render() {
    return (
        <div>
            <img src={bg}></img>
            <div className='container-head'>
                <h1>Hello</h1>
            </div>
            <div className='container-m'>
                <div className='container-mid'>
                    <h2>TO MAKE APPOINTMENT</h2>
                </div>
            </div>
        </div>
       
    )
  }
}
