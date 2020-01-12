import React, { Component } from 'react';

class ReservationBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    fetch('http://34.89.239.19:8000/api/rentals/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

      })
    })
      .then(response => {
        alert('zarezerwowano');
      })
      .catch(function(error) {
        console.log(error);
        if (error.response) {
          console.log(
            'Upload error. HTTP error/status code=', error.response.status
          );
        } else {
          console.log('Upload error. HTTP error/status code=', error.message);
        }
      });
  };

  render() {
    return <button className='btn btn-lg mg-2 btn-success'>Zarezerwuj</button>;
  }
}

export default ReservationBtn;
