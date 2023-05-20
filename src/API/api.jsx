// import axios from 'axios';

// export async function fetchImages(inputData, page) {
//   const searchParams = new URLSearchParams({
//     // url: 'https://pixabay.com/api/?',
//     key: '34892278-814f9e10ef5118b0e5ee7c1d3',
//     q: inputData,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     per_page: 12,
//     page: 1,
//   });
//   const images = await axios.get(`https://pixabay.com/api/?${searchParams}`);

//   return images.data;
// }


//---------------------------------------------------------------------------
// const stat = {
//  url: 'https://pixabay.com/api/?',
//  key: '34892278-814f9e10ef5118b0e5ee7c1d3'
// }
// export const fetchPhotos = async (searchParams, page) => {
//   return await fetch(
//`${stat.url}page=${page}&key=${stat.key}&searchParams`
//)
// }