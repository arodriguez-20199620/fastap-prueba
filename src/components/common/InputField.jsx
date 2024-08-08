import React from 'react'

export const InputField = ({ colorLabel, text, id, type, placeholder = '', value }) => {
  return (
    <>
      <label
        htmlFor={id}
        className={`block mb-2 font-semibold text-xs ${colorLabel}`}>
        {text}
      </label>
      <input
        aria-label={text}
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        id={id}
        className="border rounded-lg px-3 py-2 text-sm w-full outline-none "
      />
    </>
  )
}
