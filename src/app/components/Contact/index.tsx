'use client'
import Box from "@mui/material/Box"
import React from "react"

const Contact = () => {

  return (
    <Box id="contact" className="container--max-width w-full h-full py-12">
      <Box className="flex flex-col justify-center items-center" >
        <p className="w-1/2 p-4 text-2xl font-bold">
          Contact me
        </p>
        <form
          className="flex flex-col text-black w-1/2 p-4 gap-4"
          action="https://formsubmit.co/2ffa2212abdbe704c633d6993f695903"
          method="post"
          target="_blank"
        >
          <div className="flex flex-col lg:flex-row w-full justify-between gap-2">
            <input
              required
              placeholder="Email Address"
              className="h-8 w-full p-2 rounded-lg"
              type="email"
              name="email"
            />
            <input
              required
              placeholder="Full Name"
              className="h-8 w-full p-2 rounded-lg"
              type="text"
              name="name"
            />
          </div>
          <textarea
            required
            placeholder="Your Message"
            className="h-36 p-2 resize-none rounded-lg"
            name="message"
          />
          <button
            className="bg-yellow-500 p-4 hover:bg-yellow-300 font-bold rounded-lg"
            type="submit"
          >
            SEND
          </button>
        </form>
      </Box>
    </Box>
  )
}

export default Contact
