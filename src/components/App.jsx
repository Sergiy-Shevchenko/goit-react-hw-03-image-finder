import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';





class App extends Component {
state = {
 tags: '',
}


handleFormSubmit = tags => {
  this.setState({tags});
}


//     componentDidMount() {
//       setTimeout(()=>{
// fetch('https://pixabay.com/api/?q=cat&page=1&key=34892278-814f9e10ef5118b0e5ee7c1d3&image_type=photo&orientation=horizontal&id=736877')
    
    
//     .then(res=> res.json())
//     .then(console.log)
//     .then(imageItem => this.setState({imageItem}))
   
//       },2000)
//       console.log(this.state)
//   }



render() {
  return (
    <div>
   
       <Searchbar SubmitTagProps={this.handleFormSubmit}/> 
        <ImageGallery imageTagsProps={this.state.tags}> <ImageGalleryItem  />
       </ImageGallery>
       
      <Button />
       <Modal />
     </div>
  );
}
};

export default App;