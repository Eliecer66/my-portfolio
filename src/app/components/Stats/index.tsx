"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Box, LinearProgress, Tooltip, Typography } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import Image from 'next/image';
import ShieldIcon from '@mui/icons-material/Shield';
import techStats from '@/app/api/techStatus';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const settings = {
  height: 200,
  value: 1721,
  valueMin: 10,
  valueMax: 10000
};

export default function Stats() {
  return (
    <Box
      id="stats"
      className='w-full bg-gradient-to-r from-transparent to-emerald-950'
    >
      <Box
        className="px-2 py-24 lg:p-16 flex justify-center flex-col w-full gap-24 container--max-width items-center"
      >
        <Typography variant="h4" className="w-full flex justify-center font-black" >
          Stadistics
        </Typography>
        <Box className='flex flex-col lg:flex-row lg:items-stretch w-full lg:justify-evenly gap-10 justify-center items-center'>
          <Stack
            className='flex items-center justify-center bg-dark-secondary rounded-lg min-h-60 lg:w-full md:w-full sm:max-w-xs max-w-56 p-'
          >
            <Typography
              variant='body1'
              className='w-full flex justify-center bg-zinc-900 text-dark-cuartiary p-6 rounded-t-lg text-md lg:text-lg font-black'
            >
              Total hours
            </Typography>
            <Gauge
              className="max-w-56 lg:max-w-4xl lg:w-xl"
              {...settings}
              cornerRadius={50}
              sx={(theme) => ({
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 16,
                  transform: 'translate(0px, 0px)',
                  fill: 'white'
                },
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: '#4b00aa',
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                  fill: theme.palette.text.disabled,
                },
              })}
              text={
                ({ value, valueMax }) => `${value} / ${valueMax}`
              }
            />
          </Stack>
          <Stack
            className='flex items-center justify-center bg-dark-secondary rounded-lg min-h-60 lg:w-full md:max-w-md sm:max-w-xs max-w-56'
          >
            <Typography
              variant='body1'
              className='w-full flex justify-center bg-zinc-900 text-dark-cuartiary p-6 rounded-t-lg lg:text-md text-sm lg:text-lg font-black'
            >
              Invested hours per year
            </Typography>
            <Box className="p-4 md:p-6 basis-2/3" >
              <PieChart
                series={[
                  {
                    arcLabel: (item) => `${item.value}hr`,
                    arcLabelMinAngle: 35,
                    arcLabelRadius: '60%',
                    data: [
                      { id: 0, value: 281, label: '2022' },
                      { id: 1, value: 687, label: '2023' },
                      { id: 2, value: 753, label: '2024' },
                    ],
                  }
                ]}
                className="lg:w-[400px] sm:w-80 w-64 p-4 text-sm lg:text-lg"
                height={200}
                width={300}
                slotProps={{
                  legend: {
                    padding: 0,
                    labelStyle: {
                      fill: 'white'
                    }
                  },
                }}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fontWeight: 'bold',
                    fill: 'white'
                  }
                }}
              />
            </Box>
          </Stack >
        </Box >
        <Box
          className="flex center-container w-10/12 flex-col bg-slate-800 rounded-lg"
        >
          <TableContainer component={Paper} className="bg-slate-800">
            <Table
              className="bg-dark-secondary rounded-lg w-full"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow className="bg-zinc-900">
                  <TableCell className="text-white">
                    <Typography variant="body2" className="text-xs font-bold" align="center" >
                      Technology Stack
                    </Typography>
                  </TableCell>
                  <TableCell className="text-white text-xs font-bold" align="center">Achievements</TableCell>
                  <TableCell className="text-white text-xs font-bold" align="center">Technology Proficiency</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {techStats.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Box className="flex items-center gap-2">
                        <Image
                          src={row.image}
                          alt={row.name}
                          className="lg:max-w-6 max-w-4"
                        />
                        <Typography variant="body1" className="text-white text-sm" >
                          {row.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell className="text-white text-sm" align="center">
                      {row.badgets.map((badget, index) => {
                        if (badget.done) {
                          return (
                            <Tooltip
                              key={index}
                              title={badget.name}
                            >
                              <ShieldIcon fontSize='small' className="text-zinc-200 lg:text-xl text-xs" />
                            </Tooltip>
                          )
                        }

                        return null

                      })}
                    </TableCell>
                    <TableCell
                      className="flex items-center gap-1"
                      align="center">
                      <Box className="w-full p-0">
                        <LinearProgress variant="determinate" color="success" value={row.progress} valueBuffer={100} />
                      </Box>
                      <Typography variant="body1" className="text-white" >
                        {row.progress}%
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box >
  );
}
