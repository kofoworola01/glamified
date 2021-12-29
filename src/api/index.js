import axios from 'axios'

export const ProductsApi = async () => {
  const params = {
    limit: 10,
    price_greater_than: 7,
    product_category: 'lipstick'
  }
  const headers = {
    'x-rapidapi-host': 'makeup.p.rapidapi.com',
    'x-rapidapi-key': '987c138384msh9a477d52cf0b6b0p1046aejsn330ef344d326'
  }
  const request = await axios.get('https://makeup.p.rapidapi.com/products.json', { params, headers})
  return request
}