import React from 'react';
import Transition from 'react-addons-css-transition-group';

import Search from './Search';

const Header = React.createClass({
  getInitialState: function() {
    return {showing: 0}
  },
  componentDidMount: function() {
   this.interval = setInterval(() => {
     if (this.state.showing === this.props.images.length-1) {
       this.setState({showing: 0})
     } else {
       this.setState({showing: this.state.showing + 1})
     }
   }, 5000);
 },
 componentWillUnmount: function() {
   clearInterval(this.interval);
 },
  render: function() {
    let image = (<img key={this.state.showing} src={this.props.images[this.state.showing]} className="current"/>)
    return (
      <header>
        <div className="slider">
          <Transition
            transitionName="slide-left"
            transitionEnterTimeout={2000}
            transitionLeaveTimeout={2000}>
            {image}
          </Transition>
        </div>
        <h1>Search</h1>
        <Search/>
      </header>
    );
  }
});

export default Header;
