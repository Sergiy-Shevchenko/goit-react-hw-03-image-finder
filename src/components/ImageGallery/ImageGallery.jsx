import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import SearchLoader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    imageItem: null,
    error: null,
    status: 'idle',
    page: 1,
  };


componentDidUpdate(prevProps, prevState) {
  if (prevProps.imageTagsProps !== this.props.imageTagsProps) {
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
          imageItem: hits, 
          status: 'resolved' })
      )
      // .then(page => {
      //   this.setState({page: imageItem.page})
      // })
      .catch(error => this.setState({ error, status: 'rejected' }));
  }
  console.log(this.state.page);
}

  onClickLadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { 
      imageItem, 
      error, 
      status } = this.state;

    if (status === 'idle') {
      return <div></div>;
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
              onModal={this.props.onImgClick}
            />
          </ul>
        
          <Button onClickBtn={()=>this.onClickLadMore()}/> 
        </div>
      );
             }
  }
}
