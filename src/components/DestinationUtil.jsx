import { Component } from "react";

class DestinationUtils extends Component {
    render () {
        return (
        <div className= { this.props.class }>
            <div className="dest-text">
              <h2>{ this.props.heading }</h2>
              <p>{ this.props.text}</p>
            </div>
            <div className="image">
               <img src={ this.props.img1 } alt="img" />
               <img src={ this.props.img2 } alt="img" />
            </div>
         </div>
        )
    }
}

export default DestinationUtils;