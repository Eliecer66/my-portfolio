import * as React from 'react';

const Experience = () => {

  return (
    <div className="flex bg-gradient-to-r from-indigo-950 to-transparent flex-col w-full items-center justify-around lg:py-44 py-36 px-4 ">
      <div
        className="flex lg:flex-row flex-col-reverse justify-between container--max-width" >
        <div className="flex w-full basis-2/3">
          <video
            className="h-full rounded-2xl"
            preload="none"
            autoPlay
            muted
            loop
          >
            <source src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/videos/meCoding.webm`} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col h-full items-center justify-center basis-1/3 p-2 gap-16">
          <p className="font-black lg:text-4xl text-2xl">
            Why Partner with Me?
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default Experience;
