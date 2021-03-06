import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import AnalogueClock from 'react-analogue-clock';
import { useRouter } from 'next/router'
import Background from '../../../../../components/Background';

const Home: React.FC = () => {

  const router = useRouter();
  const [currentPrice, setCurrentPrice] = useState<string | undefined>();
  const [unit, setUnit] = useState<string | undefined>()

  useEffect(() => {
    const params = router.query;
    const sPrice = Number(params.sPrice);
    const sDate = new Date(params.sDate as string);
    const ePrice = Number(params.ePrice);
    const eDate = new Date(decodeURIComponent(params.eDate as string));

    const increment = (ePrice - sPrice) / ((eDate.getTime() - sDate.getTime()) / 1000);

    setUnit(params.unit as string);

    const intId = setInterval(() => {
      const curDate = new Date();
      const diffDate = (eDate.getTime() - curDate.getTime()) / 1000;
      const diffSec = Math.floor(diffDate);
      let newPrice = ePrice - diffSec * increment;
      if (diffDate < 0) newPrice = ePrice;
      setCurrentPrice(newPrice.toFixed(2))
    }, 1000)

    return () => {
      clearInterval(intId);
    }
  }, [router.query])

  const clockOptions = {
    baseColor: 'rgba(255,255,255,0)',
    borderColor: 'rgba(0 0,0,0)',
    borderWidth: 0,
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
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Head>
        <title>My Price Is</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Background />
      
      <div className="absolute top-0 left-0 flex flex-col h-screen w-screen">

        <div className="flex-1 p-4 m-auto">
          <AnalogueClock {...clockOptions} />
        </div>

        {
          currentPrice &&
          <div className="m-auto text-center">
            <h3 className="text-3xl">My price is</h3>
            <p className="text-6xl md:text-9xl text-gray-700 break-all">{`${currentPrice} ${unit}`}</p>
          </div>
        }

        <div className="flex-1" />

      </div>
    </div>
  )
}

export default Home