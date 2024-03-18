import { useState } from "react"

const useField = (type) => {
  const [value, setValue] = useState("")
  let regex

  //Validate if string is numbers only
  if(type === 'number') regex = /^[0-9]+$/

  const onChangeFactory = () => {
    if(type === 'number') return (event) => {
      regex.test(event.target.value)
        ? setValue(event.target.value)
        : false
    }
    return (event) => setValue(event.target.value)
  }

  const onChange = onChangeFactory()
  const reset = () => {
    setValue('')
  }

  // Number fields don't trigger onchange while inputting text without a number, so create a text field with number constraints
  const adjustedType = type === 'number' ? 'text' : type

  //Pass this in a html input element to quickly setup
  const setup = { type: adjustedType, value, onChange}
  return {
    type: adjustedType,
    value,
    setValue,
    onChange,
    reset,
    setup
  }
}

export {
  useField
}