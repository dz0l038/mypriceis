import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import AnalogueClock from 'react-analogue-clock';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { useRouter } from 'next/router'
const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: blue[200],
    },
  },
})

const Home: React.FC = () => {
  const [startPrice, setStartPrice] = useState('60');
  const [endPrice, setEndPrice] = useState('120');

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date(new Date().setHours(new Date().getHours() + 24)));

  const [unit, setUnit] = useState('€/h')

  const [url, setUrl] = useState<string | undefined>();

  const [clockOptions, setClockOptions] = useState({
    baseColor: 'rgba(255,255,255,0)',
    borderColor: 'rgba(255,255,255,0)',
    borderWidth: 1,
    centerColor: 'rgba(0,0,0,0)',
    handColors: {
      hour: '#000000',
      minute: '#000000',
      second: '#000000',
    },
    notchColor: 'rgba(0,0,0,1)',
    numbersColor: '#000000',
    showNumbers: false,
    size: 300
  })

  useEffect(() => {
    const clockSize = window.screen.width > 500 ? 300 : 150;
    setClockOptions((prev) => {
      let newOptions = { ...prev };
      newOptions.size = clockSize;
      return newOptions;
    })
  }, [])

  const generateUrl = () => {
    console.log(window.location.href)
    setUrl(`${window.location.href}${encodeURIComponent(startPrice)}/${encodeURIComponent(startDate.toISOString())}/${encodeURIComponent(endPrice)}/${encodeURIComponent(endDate.toISOString())}/${encodeURIComponent(unit)}`)
  }

  return (
    <ThemeProvider theme={customTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="h-screen w-screen overflow-hidden">
          <Head>
            <title>My Price Is</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="absolute top-0 left-0 h-screen w-screen  overflow-hidden bg-gradient-to-r from-blue-500 to-blue-200">
            <div className={`h-screen w-full
          bg-blue-50
          transform -skew-y-45 md:-skew-y-30
          border-b-2 border-t-2 border-gray-100
          flex flex-col`} >
              <div className={``} >
                <div className={`flex h-5`}>
                  <div className={`h-full w-1/4
            bg-blue-600
            -animate-translate-6`} />
                  <div className={`flex-1`} />
                  <div className={`h-full w-2/4
            bg-red-600
            -animate-translate-4`} />
                </div>

                <div className={`flex h-8`}>
                  <div className={`h-full w-1/3 
            bg-blue-800
            -animate-translate-4`} />
                  <div className={`flex-1`} />
                  <div className={`h-full w-2/4
            bg-red-800
            -animate-translate-6`} />
                </div>

                <div className={`flex h-6`}>
                  <div className={`h-full w-1/6 
            bg-blue-300
             -animate-translate-5`} />
                  <div className={`flex-1`} />
                  <div className={`h-full w-2/4
            bg-red-300
            -animate-translate-5`} />
                </div>
              </div>

              <div className={`flex-1`} />
              <div className={``} >
                <div className={`flex h-5`}>
                  <div className={`h-full w-2/4
            bg-red-600
            animate-translate-6`} />
                  <div className={`flex-1`} />
                  <div className={`h-full w-1/4
            bg-blue-600
            animate-translate-4`} />
                </div>

                <div className={`flex h-8`}>
                  <div className={`h-full w-2/4 
          bg-red-800
          animate-translate-4`} />
                  <div className={`flex-1`} />
                  <div className={`h-full w-1/3
            bg-blue-800
            animate-translate-6`} />
                </div>

                <div className={`flex h-6`}>
                  <div className={`h-full w-2/4 
          bg-red-300
          animate-translate-5`} />
                  <div className={`flex-1`} />
                  <div className={`h-full w-1/6
            bg-blue-300
            animate-translate-5`} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 flex flex-col h-screen w-screen">

            <div className="flex-1 p-4 m-auto mb-6">
              <AnalogueClock {...clockOptions} />
            </div>

            <div className="m-auto text-center">
              <div className='flex flex-col md:flex-row justify-items-center text-xl mb-6'>
                <div className='flex-1' />
                <div className='self-center'>
                  Unit:
                </div>
                <div className='self-center px-2 hidden md:block'>→</div>
                <div className='self-center'>
                  <TextField id="start-price" value={unit} onChange={(e) => setUnit(e.target.value)} />
                </div>
                <div className='flex-1' />
              </div>

              <div className='flex flex-col md:flex-row justify-items-center text-xl mb-14 md:mb-6'>
                <div className='flex-1' />
                <div className='self-center mb-4 md:mb-0'>
                  <DateTimePicker
                    inputVariant="outlined"
                    value={startDate}
                    onChange={setStartDate}
                  />
                </div>
                <div className='self-center px-2 hidden md:block'>→</div>
                <div className='self-center'>
                  <TextField id="start-price"
                    value={startPrice} onChange={(e) => setStartPrice(e.target.value)}
                    type="number"
                    InputProps={{
                      endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
                    }}
                  />
                </div>
                <div className='flex-1' />
              </div>

              <div className='flex flex-col md:flex-row justify-items-center text-xl mb-10 md:mb-6'>
                <div className='flex-1' />
                <div className='self-center mb-4 md:mb-0'>
                  <DateTimePicker
                    inputVariant="outlined"
                    value={endDate}
                    onChange={setEndDate}
                  />
                </div>
                <div className='self-center px-2 hidden md:block'>→</div>
                <div className='self-center'>
                  <TextField
                    id="end-price"
                    value={endPrice} onChange={(e) => setEndPrice(e.target.value)}
                    type="number"
                    InputProps={{
                      endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
                    }}
                  />
                </div>
                <div className='flex-1' />
              </div>
            </div>

            <div className="m-auto text-center">
              <div className='self-center mb-5'><Button variant="outlined" onClick={generateUrl}>Generate Url</Button></div>
              {
                url &&
                <div className='self-center'><a href={url}>{`${url}`}</a></div>
              }
            </div>
            <div className="flex-1" />

          </div>
        </div>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default Home