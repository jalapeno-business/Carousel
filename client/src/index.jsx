import React from 'react';
import $ from 'jquery';
import Photos from './components/photos.jsx';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: '',
    };
  }

  componentDidMount() {
    this.getPhoto();
  }


  getPhoto() {
    const that = this;
    const num = 3;
    $.ajax({
      url: `http://localhost:8888/api/carousel/${num}`,
      method: 'GET',
      success: (data) => {
        that.setState({
          photos: data,
        });
      },
      error: (err) => {
        console.log(err, 'error from getrequest');
      },
    });
  }

  render() {
    const app = this.state;

    let photoList = '';
    if (app.photos === '') {
      console.log('nothinghappening');
    } else {
      photoList = <Photos photo={app.photos[0].photo} />;
    }

    return (
      <div>
        {photoList}
      </div>
    );
  }
}
