/* global document */
import React from 'react';

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
  }

  openModal(n) {
    document.getElementById('myModal').style.display = 'block';
    //   var slides = document.getElementsByClassName("mySlides");
    //   slides[1].style.display= "block";
    this.setState({
      currentSlide: n,
    }, () => {
      const destruc = this.state;
      this.showSlides(destruc.currentSlide);
    });
  }

  closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  minusSlides() {
    const destruc = this.state;
    if (destruc.currentSlide === 1) {
      this.setState({
        currentSlide: document.getElementsByClassName('mySlides').length,
      }, () => {
        this.showSlides(destruc.currentSlide);
      });
    } else {
      this.setState({
        currentSlide: destruc.currentSlide - 1,
      }, () => {
        this.showSlides(destruc.currentSlide);
      });
    }
  }

  plusSlides() {
    const destruc = this.state;
    if (destruc.currentSlide === document.getElementsByClassName('mySlides').length) {
      this.setState({
        currentSlide: 1,
      }, () => {
        this.showSlides(destruc.currentSlide);
      });
    } else {
      this.setState({
        currentSlide: destruc.currentSlide + 1,
      }, () => {
        this.showSlides(destruc.currentSlide);
      });
    }
  }

  showSlides(n) {
    const slideIndex = this.state.currentSlide;
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
          {destruc.photo.slice(0, 4).map((photo, index) => (
            <div className="image">
              <img className="food" src={photo} onClick={() => {this.openModal(index+1)}} width="300" />
            </div>
          ))}
        </div>
        <div id="myModal" className="modal">
          <span className="gridIcon"><i className="fa fa-th"></i></span>
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
    
          </div>
        </div>
      </div>
    );
  }
}


export default Photos;
