import axios from "axios"

const baseUrl = 'http://localhost:3001'

const submitImage = async (formData) => {
  console.log(formData.get('extension'))
  //const response = await axios.post(`${baseUrl}/api/images`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
  //return `${baseUrl}/${response.data.url}`
}

export {
  submitImage
}