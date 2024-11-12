import * as React from 'react';
import Box from "@mui/material/Box";
import abaco from "../../../../public/projects/abaco.png"
import makeup from "../../../../public/projects/makeup.png"
import noganadores from "../../../../public/projects/noganadores.png"
import reactIcon from "../../../../public/logos/react.png"
import nextIcon from "../../../../public/logos/nextJs.png"
import gitIcon from "../../../../public/logos/github.png"
import dockerIcon from "../../../../public/logos/docker.png"
import jsIcon from "../../../../public/logos/js.png"
import Image, { StaticImageData } from 'next/image'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

type Techs = {
  name: string
  icon: StaticImageData
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
    name: 'Abaco',
    image: abaco,
    date: 'August 14, 2024',
    description: 'Some description about what I did. I develop this project for the company and I apply the following technologies',
    techs: [
      {
        name: 'React',
        icon: reactIcon
      },
      {
        name: 'Next',
        icon: nextIcon
      },
      {
        name: 'Git',
        icon: gitIcon
      },
      {
        name: 'JavaScript',
        icon: jsIcon
      }
    ]
  },
  {
    name: 'Makeup',
    image: makeup,
    date: 'June 30, 2024',
    description: 'Some description about what I did. I develop this project for the company and I apply the following technologies',
    techs: [
      {
        name: 'React',
        icon: reactIcon
      },
      {
        name: 'Docker',
        icon: dockerIcon
      }
    ]
  },
  {
    name: 'Sorteo No Ganadores',
    image: noganadores,
    date: 'May 23, 2024',
    description: 'Some description about what I did. I develop this project for the company and I apply the following technologiesome description about what I did',
    techs: [
      {
        name: 'React',
        icon: reactIcon
      }
    ]
  }
]

const Projects = () => {

  return (
    <Box
      id="projects"
      className='flex flex-col w-full px-4 py-36 h-full gap-6 items-center justify-between rounded-lg container--max-width' >
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
                  className='flex flex-col rounded-xl bg-dark-secondary max-w-[345px] lg:max-w-[450px]'
                >
                  <Image
                    src={element.image}
                    className='border-current w-full lg:max-h-40 md:max-h-52'
                    alt={element.name}
                  />
                  <CardContent className=" flex flex-col gap-2 h-auto bg-dark-secondary">
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
