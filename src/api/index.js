import axios from 'axios'

export const ProductsApi = async () => {
  const params = {
    price_greater_than: 7,
    limit: 20,
    product_category: 'lipstick'
  }
  const request = await axios.get('https://make-up.onrender.com/api/makeup', { params })
  return request
}

export const getSingleProduct = async id => {
  const request = await axios.get(`https://make-up.onrender.com/api/makeup/${id}`)
  console.log('here', request)
  return request
}

export const EyeItemsApi = async () => {
  const params = {
    price_greater_than: 13,
    product_category: 'pencil',
  }

  const request = await axios.get('https://make-up.onrender.com/api/makeup', { params })
  return request
}

export const CreamItemsApi = async () => {
  const params = {
    price_greater_than: 13,
    product_category: 'cream',
  }

  const request = await axios.get('https://make-up.onrender.com/api/makeup', { params })
  return request
}

export const ConcealerItemsApi = async () => {
  const params = {
    price_greater_than: 13,
    product_category: 'concealer',
  }

  const request = await axios.get('https://make-up.onrender.com/api/makeup', { params })
  return request
}
