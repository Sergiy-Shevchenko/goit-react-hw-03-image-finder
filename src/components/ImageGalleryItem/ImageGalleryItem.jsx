import {Component, ComponentClass} from "react";
import css from './ImageGalleryItem.module.css'

export default class ImageGalleryItem extends Component {
render() {
    return (
<li className={css.ImageGalleryItem}>

  <img className={css.ImageGalleryItem__image} src="" alt="" />
</li>
    )
    }
}


