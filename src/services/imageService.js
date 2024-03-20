import axios from 'axios'

const baseUrl = '/api/images'

const submitImage = async (formData) => {
  try {
    const response = await axios.post(baseUrl, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    return { isError: false, url: `http://localhost:3001/${response.data.url}` }
  } catch (error) {
    return { isError: true, status: error.response.status }
  }

}

export {
  submitImage
}