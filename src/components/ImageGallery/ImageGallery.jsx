// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'; 
// import css from './ImageGallery.module.css';

// function ImageGallery({items}) {
//   return(
// <>
//           <ul className={css.ImageGallery}>
//             {items.map(item => (
//                <ImageGalleryItem key={item.id} item={item}/>
//             ))}
           
//           </ul> 
// </>
//   )
// }

// export default ImageGallery;

//------------------------------------------------------------------------

import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import SearchLoader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    
    imageItem: [],
    error: null,
    status: 'idle',
    page: 1,
    totalHits: 0,
    showModal: false,
    modalImage: ''
  };

  
componentDidMount(){
  console.log('start')
}

componentDidUpdate(prevProps, prevState) {
  if (prevProps.imageTagsProps !== this.props.imageTagsProps || prevState.page !== this.state.page) {
    this.setState({ status: 'pending' });

    fetch(
      `https://pixabay.com/api/?q=${this.props.imageTagsProps}&key=34892278-814f9e10ef5118b0e5ee7c1d3&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.page}`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(`Error!`));
      })
      .then(({hits}) =>
        this.setState({ 
          imageItem: [...prevState.imageItem, ...hits],
          status: 'resolved', 
        
        })
          
      )
      


      .catch(error => this.setState({ error, status: 'rejected' }));
  }
    

  console.log(this.state.imageItem.length);
}

openModal = webformatURL => {
  this.setState({
    showModal: true,
    modalImage: webformatURL,
  });
}
  

togleModal = () => {
  this.setState(({ showModal }) => ({
    showModal: !showModal,
  }));
};


  onClickLadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {

    const { 
      imageItem, 
      error, 
      status,
      showModal,
      modalImage
    } = this.state;
      
    if (status === 'idle') {
      return <></>;
    }

    if (status === 'pending') {
      return <SearchLoader />;
    }

    if (status === 'rejected') {
      return <h3>{error.message}</h3>;
    }

    if (status === 'resolved') {
      return (
        <div>
          <ul className={css.ImageGallery}>
            <ImageGalleryItem
              imageItemProps={imageItem}
              onImgClick={this.openModal}
             
            />
          </ul>
        {<Button onClickBtn={()=>this.onClickLadMore()}/>} 
        {showModal && (<Modal 
        onClose={this.togleModal}> 
        <img src={modalImage} alt={'webformatURL'}/>
        </Modal>)}
        </div>
      );
             }
  }
}

