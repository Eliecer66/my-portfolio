'use client';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Box, Paper, Typography } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const settings = {
  width: 500,
  height: 200,
  value: 1721,
  valueMin: 10,
  valueMax: 10000
};

export default function Stats() {
  return (
    <div className='bg-dark-secondary rounded-xl p-7 flex justify-evenly flex-col w-full ' >
      <div className='flex bg-dark-secondary justify-between w-full '>
        <p className="bg-dark-secondary text-lg font-black">Stadistics</p>
        <p className="bg-dark-secondary text-lg font-black">Dev hours</p>
      </div>
      <Box className='flex w-full justify-evenly'>
        <Stack className='flex items-center justify-center'
          direction={{ xs: 'column', md: 'column' }}
          spacing={{ xs: 1, md: 3 }}
        >
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
            width={400}
            height={200}
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
          <Typography component={Paper} elevation={2} variant='h6' className='w-full flex justify-center bg-dark-tertiary text-dark-cuartiary rounded-md'>
            Years hours
          </Typography>
        </Stack>
        <Stack className='flex items-center'>
          <Gauge
            {...settings}
            cornerRadius={50}
            sx={(theme) => ({
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 17,
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
          <Typography component={Paper} elevation={2} variant='h6' className='w-9/12 flex justify-center bg-dark-tertiary text-dark-cuartiary rounded-md'>
            Total hours
          </Typography>
        </Stack>
      </Box>
    </div>
  );
}
