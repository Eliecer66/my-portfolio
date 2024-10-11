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
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const projects = [
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
    <Box className='flex flex-col w-full p-4 gap-4 rounded-lg' >
      <Box className='flex justify-between w-full '>
        <Typography
          variant='body1'
          className="text-lg font-black"
        >
          Projects
        </Typography>
        <Typography
          variant='body1'
          className="text-lg font-black"
        >
          Portfolio
        </Typography>
      </Box>
      <Box className="flex w-full justify-evenly ">
        {
          projects.map((element, index) => {
            return (
              <Card
                key={index}
                elevation={2}
                sx={{ maxWidth: 345 }}
                className='flex flex-col rounded-xl bg-dark-secondary'
              >
                <Image
                  src={element.image}
                  className='border-current w-full max-h-40'
                  alt={element.name}
                />
                <CardContent className=" flex flex-col gap-2 h-auto">
                  <Typography variant="h6" className="text-dark-cuartiary" >
                    {element.name}
                  </Typography>
                  <Typography variant="body2" className="text-dark-cuartiary" >
                    {element.description}
                  </Typography>
                  <Box className='flex flex-col w-full gap-2' >
                    <Box className="flex w-full justify-evenly" >
                      {element.techs.map((tech: any, index: number) => {
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
  )
}

export default Projects;
