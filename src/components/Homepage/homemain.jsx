import React from 'react'
import HomeGuide from './homeguide'
import HomeCommit  from './homeCommit'

const homemain = () => {
    return (
        <>
            <section className='w-full h-[100vh] bg-gradient-to-r from-blue-600 to-blue-800'>
                <div className="parent flex justify-center items-center px-12 gap-3 border pt-20 ">
                    <div className="left w-1/2 border-b-cyan-500 border h-[70vh] flex justify-center items-start gap-12 flex-col">
                        <h1 className='text-4xl font-bold text-white'>FINANCE Tracker <br />Budget PLANNER.</h1>
                        <p className='text-white'>Dream Budget is a smart, simple, and visual tool that helps you take control of your monthly income and expenses.</p>
                        <button className=' bg-blue-400 rounded-2xl uppercase py-1.5 px-5 text-l text-white'>Get started</button>
                    </div>
                    <div className="right w-1/2 border-amber-600    border h-[70vh]"></div>
                </div>
            </section>
            <HomeGuide />
            <HomeCommit />
        </>
    )
}

export default homemain