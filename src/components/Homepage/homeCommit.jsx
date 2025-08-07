import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#0047FF] to-[#002D9C] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE - Text */}
        <div>
          <p className="text-xs uppercase tracking-wide mb-2">
            Dream Budget Planner
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-6">
            We’re Committed to keep your <br className="hidden sm:block" />
            data secured
          </h1>
          <p className="text-xs text-white/80 mb-6 max-w-md">
            DreamBudget is designed to make money management simple and visual.
            Just follow these easy steps to create your budget and see exactly
            where your money is going — in real time.
          </p>
          <button className="bg-white text-[#0047FF] font-semibold px-6  mb-2 py-2 rounded-md hover:bg-opacity-90 transition">
            Start Now
          </button>
          <div className="box h-[40vh] w-[40vw] border border-amber-900"></div>
        </div>

        {/* RIGHT SIDE - Customer That We Served + Stats */}
        <div>
            <div className="top h-[60vh] w-[40vw] border border-amber-900">

            </div>
          <h2 className="text-2xl font-semibold mb-4">Customer That We Served</h2>
          <p className="text-white/80 text-xs leading-relaxed mb-10">
            Stripe makes moving money as easy and programmable as moving data. 
            Our teams are based in offices around the world and we process hundreds 
            of billions of dollars each year for ambitious businesses of all sizes.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold">69+</p>
              <p className="text-white/80 text-xs mt-2">
                Stripe makes moving money as easy and programmable as moving data.
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold">120+</p>
              <p className="text-white/80 text-xs mt-2">
                Stripe makes moving money as easy and programmable as moving data.
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold">699+</p>
              <p className="text-white/80 text-xs mt-2">
                Stripe makes moving money as easy and programmable as moving data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
