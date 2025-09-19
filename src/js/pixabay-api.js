import axios from 'axios';

const API_KEY = '52371243-7a3c347b3b0dd4397f9276a68';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images: ' + error.message);
  }
}