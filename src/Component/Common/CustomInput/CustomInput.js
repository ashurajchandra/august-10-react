import React from 'react'

export default function CustomInput(prop) {
    const  {name, value, type, placeholder, handleChange} = prop
  return (
    <>
    <input
    name={name}
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={(e)=>{handleChange(e)}}
    />
    </>
  )
}
