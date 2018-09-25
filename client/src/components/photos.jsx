/* global document */
import React from 'react';

import '@fortawesome/fontawesome-free/js/all';
import '../styles.css';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 1,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showSlides = this.showSlides.bind(this);
    this.plusSlides = this.plusSlides.bind(this);
    this.minusSlides = this.minusSlides.bind(this);
    this.openModalGrid = this.openModalGrid.bind(this);
  }

  openModal(n) {
    this.closeModal();
    document.getElementById('myModal').style.display = 'block';
    //   var slides = document.getElementsByClassName("mySlides");
    //   slides[1].style.display= "block";
    this.setState({
      currentSlide: n,
    }, () => {
      this.showSlides();
    });
  }

  openModalGrid() {
    this.closeModal();
    document.getElementById('myModalGrid').style.display = 'block';
  }

  closeModal() {
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('myModalGrid').style.display = 'none';

    // not necissary but added due to eslint error
    this.setState({
      currentSlide: 1,
    });
  }

  minusSlides() {
    const destruc = this.state;
    if (destruc.currentSlide === 1) {
      this.setState({
        currentSlide: document.getElementsByClassName('mySlides').length,
      }, () => {
        this.showSlides();
      });
    } else {
      this.setState({
        currentSlide: destruc.currentSlide - 1,
      }, () => {
        this.showSlides();
      });
    }
  }

  plusSlides() {
    const destruc = this.state;
    if (destruc.currentSlide === document.getElementsByClassName('mySlides').length) {
      this.setState({
        currentSlide: 1,
      }, () => {
        this.showSlides();
      });
    } else {
      this.setState({
        currentSlide: destruc.currentSlide + 1,
      }, () => {
        this.showSlides();
      });
    }
  }

  showSlides() {
    const destruc = this.state;
    const slideIndex = destruc.currentSlide;
    const slides = document.getElementsByClassName('mySlides');
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
  }

  render() {
    const destruc = this.props;
    if (destruc.photo === undefined) {
      console.log('noting');
    } return (
      <div>
        <div className="foodrow">
          {destruc.photo.slice(0, 5).map((photo, index) => (
            <div className="image">
              <img className="food" src={photo} onClick={() => {this.openModal(index+1)}} width="300" alt="" />
            </div>
          ))}
          <a className="zgt-show-gallery-lightbox" onClick={this.openModalGrid}>
            {`${destruc.photo.length} photos +`}
          </a>
        </div>
        <div id="myModal" className="modal">
          <span className="gridIcon" onClick={this.openModalGrid}><i className="fas fa-th"></i></span>
          <span className="close cursor" onClick={this.closeModal}>&times;</span>
          <div className="modal-content">
            {destruc.photo.map(photo => (
              <div className="mySlides">
                <img className="bigfood" src={photo} />
              </div>
            ))}
            <a className="prev" onClick={this.minusSlides}>&#10094;</a>
            <a className="next" onClick={this.plusSlides}>&#10095;</a>
          </div>
        </div>
        <div id="myModalGrid" className="modal">
          <span className="close cursor" onClick={this.closeModal}>&times;</span>
          <div className="modal-grid">
            {destruc.photo.map((photo, index) => (
              <div className="gridPhoto">
                <img className="photodoto" src={photo} onClick={() => {this.openModal(index+1)}} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}


export default Photos;
