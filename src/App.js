import React, {Component} from "react";


class Twitter extends Component {
  
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }

  render () {
    return (
      <div>
        testando
      </div>
    )   
  }
}

export default Twitter