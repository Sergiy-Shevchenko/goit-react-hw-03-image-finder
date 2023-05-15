import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
// import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    tags: '',
    showModal: false,
    showButton: false,
  };

  handleFormSubmit = tags => {
    this.setState({ tags });
  };

  openModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleButton = () => {
    this.setState(({showButton}) => ({
      showButton: !showButton
    }))
  }



  render() {
    const { showModal, showButton } = this.state;
    return (
      <div>
        <Searchbar SubmitTagProps={this.handleFormSubmit} />

        <ImageGallery
          imageTagsProps={this.state.tags}
          onImgClick={this.openModal}
        ></ImageGallery>

        {showButton &&  < Button onClickButton={this.handleButton}/>}
        {showModal && <Modal onClose={this.openModal} />}
      </div>
    );
  }
}

export default App;
