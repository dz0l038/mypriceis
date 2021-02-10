import React from 'react';

const Background = () => {

    return (
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
    )
}

export default Background