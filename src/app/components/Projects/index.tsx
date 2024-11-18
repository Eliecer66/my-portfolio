import * as React from 'react';
// local imports
import movies from "../../../../public/projects/movies.png"
import quizzical from "../../../../public/projects/quizzical.png"
import makeup from "../../../../public/projects/makeup.png"
// material imports
import Box from "@mui/material/Box";
import Image, { StaticImageData } from 'next/image'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import shopifyIcon from "../../../../public/icons/shopify.svg"

// remote imports
const reactIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
const jsIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
const typeIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
const nextIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
const sassIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
const cssIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"
const htmlIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"

type Techs = {
  name: string
  icon: string | StaticImageData
}

type Projects = {
  name: string
  image: StaticImageData
  date: string
  description: string
  techs: Techs[]
}
const projects: Projects[] = [
  {
    name: 'Movies +',
    image: movies,
    date: 'August 14, 2024',
    description: 'I built this project to apply and expand my knowledge in SASS, JavaScript, and React, focusing on creating a performant, content-rich application. My primary goal was to effectively manage a substantial amount of content without sacrificing performance.',
    techs: [
      {
        name: 'React',
        icon: reactIcon
      },
      {
        name: 'Nextjs',
        icon: nextIcon
      },
      {
        name: 'TypeScript',
        icon: typeIcon
      },
      {
        name: 'SASS',
        icon: sassIcon
      }
    ]
  },
  {
    name: 'Shop',
    image: makeup,
    date: 'June 30, 2024',
    description: 'This project was designed to showcase my expertise in Shopify, CSS3, HTML5, and JavaScript. My goal was to build a seamless, responsive user experience within the Shopify platform, leveraging modern web standards to create clean, interactive, and visually engaging designs.',
    techs: [
      {
        name: 'JavaScript',
        icon: jsIcon
      },
      {
        name: 'CSS3',
        icon: cssIcon
      },
      {
        name: 'Shopify',
        icon: shopifyIcon
      },
      {
        name: 'HML5',
        icon: htmlIcon
      }
    ]
  },
  {
    name: 'Quizzical',
    image: quizzical,
    date: 'May 23, 2024',
    description: 'I created this project to practice foundational front-end functionalities, including data fetching, working with local storage, and managing component interactions using JavaScript and React. This project gave me a solid understanding of React fundamentals, such as using hooks, interacting with the DOM.',
    techs: [
      {
        name: 'React',
        icon: reactIcon
      },
      {
        name: 'CSS3',
        icon: cssIcon
      },
      {
        name: 'JavaScript',
        icon: jsIcon
      }
    ]
  }
]

const Projects = () => {

  return (
    <Box
      id="projects"
      className='flex flex-col w-full px-4 py-36 gap-28 items-center justify-between rounded-lg container--max-width' >
      <Box className='flex justify-center w-full'>
        <Typography
          variant='h4'
          className="font-black"
        >
          Projects
        </Typography>
      </Box>
      <Box className="flex w-full h-full items-center ">
        <Box className="flex lg:flex-row flex-col w-full justify-center items-center gap-6">
          {
            projects.map((element, index) => {
              return (
                <Card
                  key={index}
                  elevation={2}
                  className='flex flex-col lg:h-[450px] rounded-xl bg-dark-secondary max-w-[345px] lg:max-w-[370px]'
                >
                  <Image
                    width={500}
                    height={500}
                    src={element.image}
                    className='border-current w-full lg:max-h-40 md:max-h-52'
                    alt={element.name}
                  />
                  <CardContent className=" flex flex-col gap-2 h-full bg-dark-secondary justify-around">
                    <Typography variant="h6" className="text-dark-cuartiary" >
                      {element.name}
                    </Typography>
                    <Typography variant="body2" className="text-dark-cuartiary" >
                      {element.description}
                    </Typography>
                    <Box className='flex flex-col w-full gap-2' >
                      <Box className="flex w-full justify-evenly" >
                        {element.techs.map((tech: Techs, index: number) => {
                          return (
                            <Image
                              width={500}
                              height={500}
                              className="max-w-8"
                              key={index}
                              src={tech.icon}
                              alt={`${index}`}
                            />
                          )

                        })}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              )
            })
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Projects;
