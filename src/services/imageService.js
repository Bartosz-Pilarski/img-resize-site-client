import axios from "axios"

const baseUrl = '/api/images'

const submitImage = async (formData) => {
  const response = await axios.post(baseUrl, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
  return `${baseUrl}/${response.data.url}`
}

export {
  submitImage
}