import { Component } from 'react';

import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    imageItem: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageTagsProps !== this.props.imageTagsProps) {
      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?q=${this.props.imageTagsProps}&key=34892278-814f9e10ef5118b0e5ee7c1d3&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(imageItem => this.setState({ imageItem }))
        .finally(() => this.setState({ loading: false }));
      console.log(this.state);
    }
  }

  

  render() {
    const {imageItem} = this.state
    return (
      <ul className={css.ImageGallery}>
        {this.state.loading && <div>Loading...</div>}
        {imageItem && (
          <div>
            <img
              className={css.ImageGalleryItem__image}
              src={imageItem.largeImageURL}
              alt=""
            />
          </div>
        )}
      </ul>
    );
  }
}
