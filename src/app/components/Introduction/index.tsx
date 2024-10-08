'use-client'
import * as React from "react"
import Image from "next/image"

import menuPng from "../../../../public/menu2.svg"
import profilePicture from "../../../../public/album/profile.jpeg"
import instagramIcon from "../../../../public/logos/instagram.png"

import linkedinIcon from "../../../../public/logos/linkedin.png"
import githubIcon from "../../../../public/logos/github.png"
import xIcon from "../../../../public/logos/x.png"
import profileData from '../../api/techData'

// ===========================| INTRODUCTION | ================================

const Introduction: React.FC = () => {

  const techData = profileData.getTechStack()

  return (
    <div className="flex flex-col gap-4">
      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4 container--max-width sm:w-full '>
        {/* Left container */}
        <div className="flex flex-col gap-4 md:basis-1/2">
          {/* Hire me container */}
          <div className='w-full flex p-2 bg-dark-secondary border-1 rounded-3xl'>
            <div
              className='relative w-full flex flex-col items-center bg-dark-secondary p-1 sm:p-3 gap-2 md:min-h-44 md:gap-4 md:items-center lg:gap-0 lg:items-start'
            >
              <span className="inline-flex text-center justify-start text-3xl md:w-full sm:w-10/12 bg-dark-secondary leading-tight font-black xs:text-2xl sm:text-3xl md:text-5xl md:text-center lg:text-5xl xl:text-6xl lg:text-start">
                ¡Make your ideas reality thorough UI designs!
              </span>
              <button
                className='lg:bottom-0 lg:right-0 flex justify-center text-md p-2 bg-purple-800 border-1 rounded-2xl border-purple-800 xl:p-4 lg:p-3 md:w-3/12 font-bold md:text-md lg:text-sm lg:font-black md:relative md:items-center lg:absolute xl:text-lg'
              >
                Hire me! 👋
              </button>
            </div>
          </div>
          {/* Expirience container */}
          <div className="flex flex-col md:flex-row gap-2 w-full h-full justify-evenly">
            <div
              className="bg-dark-secondary p-4 h-full border-1 flex justify-center flex-col items-center text-lg md:text-xl basis-4/12 rounded-3xl md:min-h-52 lg:min-h-full"
            >
              <p className="text-center text-4xl bg-dark-secondary text-white md:text-5xl font-bold border-1">
                2+
              </p>
              <p className="text-center font-bold bg-dark-secondary text-white">
                Years of experience
              </p>
            </div>
            <div
              className="bg-dark-secondary p-4 border-1 flex justify-center flex-col items-center text-lg md:text-xl basis-4/12 rounded-3xl md:min-h-52 lg:min-h-full"
            >
              <p className="bg-dark-secondary text-4xl md:text-5xl font-bold border-1">
                10+
              </p>
              <p className="text-center font-bold bg-dark-secondary">
                Projects
              </p>
            </div>
            <div
              className="bg-dark-secondary p-4 border-1 flex justify-center flex-col items-center text-lg md:text-xl basis-4/12 rounded-3xl md:min-h-52 lg:min-h-full"
            >
              <p className=" flex justify-center bg-dark-secondary text-white text-4xl md:text-5xl font-bold border-1">
                5+
              </p>
              <p className="text-center font-bold bg-dark-secondary text-white">
                Clients
              </p>
            </div>
          </div>
        </div>
        {/* Right container */}
        <div className="flex flex-col gap-4 basis-1/2">
          {/* Graph container */}
          <div className="bg-dark-secondary flex justify-between rounded-3xl p-4">
            <p className="bg-dark-secondary font-bold text-xl">
              Jorge&apos;s Graph
            </p>
            <div className="bg-dark-secondary flex items-center">
              <Image
                className="icon--container-bg border-current text-white"
                alt="menu-icon"
                src={menuPng}
                width={25}
                height={25}
              />
            </div>
          </div>
          {/* My Photo */}
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex basis-9/12 w-full h-full">
              <Image
                quality={100}
                className="min-w-60 icon--container-bg border-current rounded-3xl"
                alt="profile-picture"
                src={profilePicture}
                priority
                style={{
                  objectFit: 'cover'
                }}
              />
            </div>
            {/* Personal info */}
            <div className="flex flex-col gap-2 basis-2/6 justify-between w-full">
              {/* Name */}
              <div className="flex justify-between p-4 bg-dark-secondary rounded-3xl">
                <p className="bg-dark-secondary font-bold" >Name: </p>
                <p className="bg-dark-secondary font-bold">Jorge Acosta</p>
              </div>
              {/* Location */}
              <div className="flex flex-col justify-around h-full p-4 gap-2 bg-dark-secondary rounded-3xl">
                <div className="flex justify-between bg-dark-secondary">
                  <p className="bg-dark-secondary" >Location: </p>
                  <p className="bg-dark-secondary font-black">Buenos Aires</p>
                </div>
                <iframe
                  title="Map"
                  className="rounded-3xl max-w-full sm:max-w-64 md:max-w-72 h-full grayscale"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26274.08880760683!2d-58.47133828582812!3d-34.615803808614456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacd918f1cb7%3A0x1bafab1d8c8d4216!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1685554416829!5m2!1sen!2sus">
                </iframe>
              </div>
              {/* Social media */}
              <div className="flex justify-between p-2 bg-dark-secondary rounded-3xl">
                <Image
                  className="max-w-14 icon--container-bg border-current"
                  alt="instagram-icon"
                  src={instagramIcon}
                />
                <Image
                  className="max-w-14 icon--container-bg border-current"
                  alt="linkedin-icon"
                  src={linkedinIcon}
                />
                <Image
                  className="max-w-14 icon--container-bg border-current"
                  alt="github-Icon"
                  src={githubIcon}
                />
                <Image
                  className="max-w-14 icon--container-bg border-current"
                  alt="x-icon"
                  src={xIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex" >
        <div className="flex flex-col bg-dark-secondary gap-2 w-full rounded-2xl p-4 font-black text-xl">
          <div className="flex bg-dark-secondary justify-between w-full ">
            <p className="bg-dark-secondary text-2xl">Technology</p>
            <p className="bg-dark-secondary font-normal 2xl">Stack</p>
          </div>
          <div className="bg-dark-secondary flex justify-evenly items-center p-4 hover:cursor-pointer" >
            {techData.map((element, index) => {
              return (
                <Image
                  title={element.name}
                  key={index}
                  src={element.image}
                  alt={`logo-${element.name}`}
                  width={60}
                  height={60}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction