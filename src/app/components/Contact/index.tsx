'use client'
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import React, { useState } from "react"

type FormData = {
  email: string
  message: string
}

const Contact = () => {

  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: ""
  })

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  console.log(formData)
  const handleSumit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event)
  }

  const handleOnclick = () => {
    console.log("send message")
  }

  return (
    <Box className="flex justify-center items-center h-screen bg-gradient-to-tr from-transparent to-emerald-950 w-full " >
      <form
        action="jorge.eacostadiaz@gmail.com"
        method="post"
        className="flex flex-col gap-2 text-black"
        onSubmit={handleSumit}
      >
        <input
          className="rounded-lg h-8 w-72"
          type="email"
          name="email"
          onChange={handleOnChange}
          value={formData.email}
        />
        <textarea className="rounded-lg h-12" name="message" onChange={handleOnChange} value={formData.message} />
        <Button color="inherit" onClick={handleOnclick}>Send</Button>
      </form>
    </Box>
  )
}

export default Contact
