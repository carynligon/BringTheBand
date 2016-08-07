import React from 'react';

const Modal = React.createClass({
containerStyles: {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: 'rgba(0,0,0,.5)'
},
contentStyles: {
  background: 'white',
  width: '75%',
  margin: '0 auto',
  height: '60vh',
  marginTop: '12.5%',
  overflow: 'scroll'
},
  render: function() {
    console.log(this.props.params.artistId);
    return(
    <div className="modal-container" style={this.containerStyles}>
      <div className="modal-content" style={this.contentStyles}>
      </div>
    </div>
    );
  }
});

export default Modal;
