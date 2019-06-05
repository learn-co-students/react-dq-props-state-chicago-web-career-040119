import React, { Component } from 'react'
import Master from './assets/master-hog.png'
import BabyHog from './BabyHog'
import offspring from './db.js'

export default class MasterHog extends Component {

  constructor() {
    super()
    this.state = {
      eyeColor: "",
    }
  }


  changeEyeColor = (e) => {
    // let color = e.target.value
    // let image = 'nothing'
    // if (color === "blue") {
    //   image = 'http://localhost:3000/assets/blue-eyes.png'
    // } else if (color === "glowing") {
    //   image = 'http://localhost:3000/assets/glowing-eyes.png'
    // } else if ( color === "sun") {
    //   image = 'http://localhost:3000/assets/sun-eyes.png'
    // } else {
    //   image = 'http://localhost:3000/assets/unadulterated-hoglette.png'
    // }
    this.setState({
      eyeColor: e.target.value,
    })
  }


  render() {

    return (
      <div>

        <input type="radio" name="eyeColor" value="blue" onChange={this.changeEyeColor} />
        Blue<br></br>
        <input type="radio" name="eyeColor" value="sun" onChange={this.changeEyeColor} />
        Sun<br></br>
        <input type="radio" name="eyeColor" value="glowing" onChange={this.changeEyeColor} />
        Glowing<br></br>
      
        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt="" />
        </div>
        
        <ul className="hoglist">
          {/* <BabyHog color={this.state.eyeColor} id={offspring[0].id} name={offspring[0].name} hobby={offspring[0].hobby}/> */}
          <BabyHog color={this.state.eyeColor} babyData={offspring[0]}/>
          <BabyHog color={this.state.eyeColor} babyData={offspring[1]}/>
          <BabyHog color={this.state.eyeColor} babyData={offspring[2]}/>
        </ul>

      </div>
    )
  }

}
