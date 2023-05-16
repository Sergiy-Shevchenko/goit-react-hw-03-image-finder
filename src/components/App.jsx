import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    tags: '', 
    showModal: false,  
  };

  handleFormSubmit = tags => {
    this.setState({ tags });
  };
  
  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
 
  render() {
    const { showModal} = this.state;
    return (
      <div>
        <Searchbar SubmitTagProps={this.handleFormSubmit} />
          <ImageGallery
          imageTagsProps={this.state.tags}
          onImgClick={this.togleModal}
        ></ImageGallery>
         {showModal && <Modal onClose={this.togleModal} />}
      </div>
    );
  }
}

export default App;
