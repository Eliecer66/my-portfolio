import * as React from "react"
import Image from "next/image"
import profilePicture from "../../../../public/album/profile.jpeg"
import hackerRank from "../../../../public/logos/hackerRank.png"
// public imports
import linkedinIcon from "../../../../public/logos/linkedin.png"
import githubIcon from "../../../../public/logos/github.png"
import cvIcon from "../../../../public/logos/cv.png"
import profileData from '../../api/techData'
// material imports
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Tooltip from "@mui/material/Tooltip"

// ===========================| INTRODUCTION | ================================

const Introduction: React.FC = () => {
  const techData = profileData.getTechStack()

  return (
    <Box
      id="home"
      className="flex flex-col gap-6 p-4 justify-start items-center"
    >
      <Box className='flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4 container--max-width sm:w-full '>
        {/* Left container */}
        <Box className="flex flex-col gap-4 md:basis-1/2">
          {/* Hire me container */}
          <Box className='w-full flex p-2 bg-dark-secondary border-1 rounded-3xl'>
            <Box
              className='relative w-full flex flex-col items-center bg-dark-secondary p-1 sm:p-3 gap-2 md:min-h-44 md:gap-4 md:items-center lg:gap-0 lg:items-start'
            >
              <p
                className="inline-flex text-center font-black justify-start text-3xl md:w-full sm:w-10/12 bg-dark-secondary xs:text-2xl sm:text-3xl md:text-5xl md:text-center lg:text-4xl xl:text-5xl lg:text-start"
              >
                Transforming Ideas into Interactive and Impactful Digital Experiences!
              </p>
              <button
                className='lg:bottom-0 lg:right-0 flex justify-center text-md p-2 bg-indigo-950 border-1 rounded-2xl xl:p-4 lg:p-3 md:w-3/12 font-bold md:text-md lg:text-sm lg:font-black md:relative md:items-center lg:absolute xl:text-lg'
              >
                <a href="#contact" >Hire me! 👋 </a>
              </button>
            </Box>
          </Box>
          {/* Expirience container */}
          <Box className="flex flex-col md:flex-row gap-2 w-full h-full justify-evenly">
            <a
              href="#stats"
              className="bg-indigo-950 hover:bg-indigo-900 p-4 h-full border-1 flex justify-center flex-col items-center text-lg md:text-xl basis-4/12 rounded-3xl md:min-h-52 lg:min-h-full"
            >
              <p
                className="text-center text-4xl bg-inherit text-white md:text-5xl font-bold border-1"
              >
                2+
              </p>
              <p
                className="text-center font-bold bg-inherit text-white"
              >
                Years of experience
              </p>
            </a>
            <a
              href="#projects"
              className="bg-emerald-950 hover:bg-emerald-900 p-4 border-1 flex justify-center flex-col items-center text-lg md:text-xl basis-4/12 rounded-3xl md:min-h-52 lg:min-h-full"
            >
              <p
                className="bg-inherit text-4xl md:text-5xl font-bold border-1"
              >
                2+
              </p>
              <p
                className="text-center font-bold bg-inherit"
              >
                Projects
              </p>
            </a>
            <a
              href="#projects"
              className="bg-slate-950 p-4 border-1 flex justify-center flex-col items-center text-lg md:text-xl basis-4/12 rounded-3xl md:min-h-52 lg:min-h-full hover:bg-slate-900"
            >
              <p
                className="flex justify-center bg-inherit text-white text-4xl md:text-5xl font-bold border-1"
              >
                2+
              </p>
              <p
                className="text-center font-bold bg-inherit text-white"
              >
                Clients
              </p>
            </a>
          </Box>
        </Box>
        {/* Right container */}
        <Box className="flex flex-col gap-4 basis-1/2">
          {/* Graph container */}
          <Box className="bg-amber-300 flex justify-between items-center rounded-3xl p-3 h-auto">
            <p
              className="flex font-bold text-xl text-dark-primary"
            >
              Frontend Web Developer
            </p>
            <Typography
              variant="body1"
              className="flex text-dark-cuartiary bg-dark-primary px-2 rounded-3xl font-black"
            >
              Jr
            </Typography>
          </Box>
          {/* My Photo */}
          <Box className="flex flex-col md:flex-row gap-2">
            <Box className="flex basis-9/12 w-full h-full">
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
            </Box>
            {/* Personal info */}
            <Box className="flex flex-col gap-2 basis-2/6 justify-between w-full">
              {/* Name */}
              <Box className="flex justify-between p-4 bg-dark-secondary rounded-3xl">
                <Typography
                  variant="body1"
                  className="bg-dark-secondary font-bold"
                >
                  Name:
                </Typography>
                <Typography
                  variant="body1"
                  className="bg-dark-secondary font-bold"
                >
                  Jorge Acosta
                </Typography>
              </Box>
              {/* Location */}
              <Box className="flex flex-col justify-around h-full p-4 gap-2 bg-dark-secondary rounded-3xl">
                <Box className="flex justify-between bg-dark-secondary">
                  <Typography
                    variant="body1"
                    className="bg-dark-secondary font-black"
                  >
                    Location:
                  </Typography>
                  <Typography
                    variant="body1"
                    className="bg-dark-secondary font-black"
                  >
                    Buenos Aires
                  </Typography>
                </Box>
                <iframe
                  title="Map"
                  className="rounded-3xl max-w-full sm:max-w-64 md:max-w-72 h-full grayscale"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26274.08880760683!2d-58.47133828582812!3d-34.615803808614456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacd918f1cb7%3A0x1bafab1d8c8d4216!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1685554416829!5m2!1sen!2sus">
                </iframe>
              </Box>
              {/* Social media */}
              <Box className="flex justify-between p-2 bg-dark-secondary rounded-3xl">
                <Tooltip title="Hackerrank">
                  <a href="https://www.hackerrank.com/profile/jorge_eacostadi1" target="_blank" >
                    <Image
                      className="max-w-14 icon--container-bg border-current rounded-3xl"
                      alt="hacker-rank"
                      src={hackerRank}
                    />
                  </a>
                </Tooltip>
                <Tooltip title="Linkedin">
                  <a href="https://www.linkedin.com/in/jeacostad/" target="_blank">
                    <Image
                      className="max-w-14 icon--container-bg border-current"
                      alt="linkedin-icon"
                      src={linkedinIcon}
                    />
                  </a>
                </Tooltip>
                <Tooltip title="Github">
                  <a href="https://github.com/Eliecer66" target="_blank" >
                    <Image
                      className="max-w-14 icon--container-bg border-current"
                      alt="github-Icon"
                      src={githubIcon}
                    />
                  </a>
                </Tooltip>
                <Tooltip title="Resume">
                  <a href="https://drive.google.com/file/d/1iiIx_iBFTOsqULKJFdj1epYJuheheNXS/view?usp=drive_link" target="_blank">
                    <Image
                      className="max-w-14 icon--container-bg border-current"
                      alt="x-icon"
                      src={cvIcon}
                    />
                  </a>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="flex w-full container--max-width" >
        <Box className="flex flex-col gap-2 w-full rounded-2xl p-4 font-black text-xl">
          <Box className="flex justify-evenly items-center lg:p-2 p-2 hover:cursor-pointer w-ful gap-2" >
            {techData.map((element, index) => {
              return (
                <Tooltip key={index} title={element.name} >
                  <Image
                    src={element.image}
                    alt={`logo-${element.name}`}
                    className="lg:max-w-12 sm:max-w-10 max-w-6 w-12"
                    width={500}
                    height={500}
                  />
                </Tooltip>
              )
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Introduction
