import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Experience = () => {

  return (
    <Box className="flex bg-gradient-to-r from-indigo-950 to-transparent flex-col w-full items-center justify-around lg:py-44 py-36 px-4 ">
      <Box
        className="flex lg:flex-row flex-col-reverse justify-between container--max-width" >
        <Box className="flex w-full basis-2/3">
          <video
            className="h-full rounded-2xl"
            preload="none"
            autoPlay
            muted
            loop
          >
            <source src="/videos/meCoding.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Box className="flex flex-col h-full items-center justify-center basis-1/3 p-2 gap-16">
          <Typography variant="h6" className="font-black lg:text-4xl text-2xl">
            Why Partner with Me?
          </Typography>
          <ul role='list' className="flex flex-col p-4 gap-1 text-lg w-full">
            <li className="flex items-center">
              <span className="text-white mr-2">•</span> Maximized Productivity & Speed
            </li>
            <li className="flex items-center">
              <span className="text-white mr-2">•</span> Expert Handling of Large Codebases
            </li>
            <li className="flex items-center">
              <span className="text-white mr-2">•</span> Seamless Remote Development
            </li>
            <li className="flex items-center">
              <span className="text-white mr-2">•</span> Commitment to Code Quality
            </li>
            <li className="flex items-center">
              <span className="text-white mr-2">•</span> Continuous Improvement
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
