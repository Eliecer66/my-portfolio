import * as React from 'react'
import myPhoto from '../../../../public/album/myPhoto.jpeg'
import Image from 'next/image'

const About = () => {
  return (
    <div className='text-dark-cuartiary'>
      <h2 className='w-full p-4 flex justify-center items-center font-black text-2xl'>
        About me
      </h2>
      <div className='flex gap-4 items-center'>
        <div className='flex flex-col basis-8/12 gap-4'>
          <div className='text-dark-cuartiary bg-dark-secondary rounded-xl p-4 gap-2' >
            <div className='flex bg-dark-secondary justify-between w-full '>
              <p className="bg-dark-secondary text-lg font-black">Personal</p>
              <p className="bg-dark-secondary text-lg font-black">Information</p>
            </div>
            <p className='flex mt-2 p-2'>
              I’m a front-end developer with about 2 years of experience designing
              web pages. I’m also studying system analysis, at `UBA`. I consider
              myself a hard-working person who can face important tasks in the
              programming field, I’m driven by the desire to learn and be better.
              My professional goal is to be a good programmer. Among my box tools
              I have the capacity to follow orders, solve problems and suggests
              ideas. I have a good bases on programming, and the capacity to learn
              new technologies quickly. I can express myself and understand what
              the clients want, I a hundred percent committed with the company given
            </p>
          </div>
          <div className='rounded-xl p-4' >
            <div className='flex justify-between w-full '>
              <p className=" text-lg font-black">Career</p>
              <p className=" text-lg font-black">Path</p>
            </div>
            <p className='flex mt-2 p-2'>
              System analysis is a career that has as a goal give to professionals the necessary tools to address projects successfully focusing on optimal performance and user experience. System analysis professionals have to design the right paths to offer the costumer a long-term functional project. Some of the most important features that the project has to have are maintenance and scalability.
            </p>
          </div>
          <div className='bg-dark-secondary rounded-xl p-4' >
            <div className='flex bg-dark-secondary justify-between w-full '>
              <p className="bg-dark-secondary text-lg font-black">Academic</p>
              <p className="bg-dark-secondary text-lg font-black">Formation</p>
            </div>
            <p className='flex mt-2 p-2'>
              I’m currently working as a part-time front-end developer for a company located in Panama called `PlugIn`, It is a company of service and sales of fiscal printers and `POS` point of sales software. Among my responsibilities I have to design `UX/UI` web features focus on user experience, to achieve this I have been using technologies such as HTML, and CSS. I took the design they send from `Figma`. I translate it into HTML and CSS code and send it back through `Github`.
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center basis-1/3'>
          <Image
            quality={100}
            className='border-current rounded-3xl max-w-md'
            src={myPhoto}
            alt='my-photo'
            priority
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default About
