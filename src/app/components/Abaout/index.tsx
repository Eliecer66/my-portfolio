import * as React from 'react'
import myPhoto from '../../../../public/album/myPhoto.jpeg'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'

import machine from "../../../../public/album/machine.jpg"

const About = () => {

  return (
    <div
      id="about"
      className='relative text-dark-cuartiary h-full bg-black -z-20 py-2'
    >
      <Box className="absolute flex justify-center -z-10 w-full">
        <Image
          className=" lg:block md:block grayscale opacity-40 lg:max-h-[805px] md:max-h-[760px] sm:max-h-[1500px] xl:max-h-[700px] hidden"
          src={machine}
          alt="myPhoto"
          style={{
            objectFit: 'cover'
          }}
        />
      </Box>
      <Box className="container--max-width py-16 px-6">
        <Typography
          variant="h4"
          className='w-full p-4 flex justify-center items-center font-black'
        >
          About
        </Typography>
        <div className='flex flex-col gap-4 items-center py-8 lg:flex-row '>
          <div className='lg:flex justify-center items-center hidden '>
            <Image
              quality={100}
              className='border-current rounded-xl max-w-xs grayscale'
              src={myPhoto}
              alt='my-photo'
              priority
              style={{
                objectFit: 'contain'
              }}
            />
          </div>
          <div className='flex flex-col basis-8/12 gap-4'>
            <div className='rounded-xl p-4 gap-2' >
              <Typography variant="body1" className='flex mt-2 p-2 leading-7'>
                I am a passionate front-end developer with over two years of experience
                creating engaging, high-performance web applications. Currently, I
                work at Tecno Accion, a leader in bespoke IT solutions for the gambling industry.
                My role focuses on transforming designs into clean, efficient, and
                user-friendly UI/UX layouts, all while ensuring optimal performance
                and responsiveness.

              </Typography>
              <Typography variant="body1" className='flex mt-2 p-2 leading-7'>
                At Tecno Accion, I’m committed to delivering robust, maintainable
                code by adhering to best practices in clean code and performance
                optimization. My day-to-day work involves developing new features,
                maintaining and improving legacy code, and collaborating with
                cross-functional teams in an agile environment to ensure seamless
                product delivery.
              </Typography>
              <Typography variant="body1" className='flex mt-2 p-2 leading-7'>
                Previously, I worked with Parkourdevs as a Front-End Web Developer,
                where I contributed to a compliance tool application by programming
                UI/UX features and enhancing server-side rendering for faster load times.
                This experience deepened my understanding of building scalable,
                responsive web interfaces and reinforced my commitment to
                delivering clean, well-designed code.
              </Typography>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default About
