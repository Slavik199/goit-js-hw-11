import { getImagesByQuery } from './pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css'; 



const form = document.querySelector('.form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = form.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    hideLoader();

    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'No Results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  }
});
