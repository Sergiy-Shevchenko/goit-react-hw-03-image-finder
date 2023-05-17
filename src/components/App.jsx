import React, { Component } from 'react';
import { fetchImages } from './API/api';
import ImageGallery from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import Button from './Button/Button'; 

import css from './styles.module.css';

let page = 1;

class App extends Component {
  state = {
    inputData: '',
    items: [],
    totalHits: 0,
    status: 'idle',
    page: 1
  };

  handleSubmit = async inputData => 
  { page = 1;
    if (inputData.trim() === '') {
       alert('Please enter search name');
       return
   } else {

    
try {
        this.setState({ status: 'pending' });
        const {totalHits, hits} = await fetchImages(inputData, page);
        if (hits.length < 1) {
          this.setState ({status: 'idle'})
        alert( 'Sorry, there are no images matching your search query. Please try again.')
        } 
        else {
        this.setState ({
          items: hits, 
          inputData: '',
          totalHits: totalHits,
          status: 'resolved'
        });
      }

        
} catch (error) {
  this.setState({status: 'rejected'})
}
  } 
};

onNextPage = async () => {
  this.setState({status:'pending'})

try{
  const {hits} = await fetchImages(this.state.inputData, (page+=1))
  this.setState(prevState => ({
    items: [...prevState.items, ...hits],
    // page: page + 1,
    status: 'resolved'
  }))

} catch (error) {
  this.setState({status: 'rejected'})
}
}
 
  render() {
    const {totalHits, status, items} = this.state;
    
    if (status === 'idle') {
      return (
        <div className={css.App}>
      <Searchbar onSubmit={this.handleSubmit}/>
      </div>
      )
    }

    if (status === 'pending') {
      return (
        <div className={css.App}>
      <Searchbar onSubmit={this.handleSubmit}/>
      <Loader/>
      </div>
      )
    }

    if (status === 'rejected') {
      return (
        <div className={css.App}>
      <Searchbar onSubmit={this.handleSubmit}/>
     <p>Something wrong, try later</p>
      </div>
      )
    }

    if (status === 'resolved') {
      return (
        <div className={css.App}>
     <Searchbar onSubmit={this.handleSubmit}/>
     <ImageGallery page={page} items={this.state.items}/>
     {totalHits > 12 && totalHits > items.length && (
     <Button onClick={this.onNextPage}/>)}
   
      </div>
      )
    }
    
  }
}

export default App;



//---------------------------------------------------------------------------
// import React, { Component } from 'react';
// import { Searchbar } from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Modal from './Modal/Modal';

// class App extends Component {
//   state = {
//     tags: '', 
//     showModal: false,  
//   };

//   handleFormSubmit = tags => {
//     this.setState({ tags });
//   };
  
//   togleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };
 
//   render() {
//     const { showModal} = this.state;
//     return (
//       <div>
//         <Searchbar SubmitTagProps={this.handleFormSubmit} />
//           <ImageGallery
//           imageTagsProps={this.state.tags}
//           onImgClick={this.togleModal}
//         ></ImageGallery>
//          {showModal && <Modal onClose={this.togleModal} />}
//       </div>
//     );
//   }
// }

// export default App;