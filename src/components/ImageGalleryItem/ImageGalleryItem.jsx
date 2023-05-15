import css from './ImageGalleryItem.module.css'

export default function  ImageGalleryItem ({imageItemProps, onModal}) {
  return (
<>
{imageItemProps.map(({id, webformatURL, largeImageURL, tags}) =>(
  <li 
  key={id}
  className={css.ImageGalleryItem}>    
  <img 
  className={css.ImageGalleryItem__image} 
  src={webformatURL} 
  alt={tags}
  onClick={()=>onModal(largeImageURL)} />
  </li>

) )}
</>
)
}