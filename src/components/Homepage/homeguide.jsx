import React from 'react';

const steps = [
  {
    title: "Step 1: Enter Your Monthly Income",
    desc: "Start by telling us how much money you make in a month. This could be your salary, freelance income, or any other source. You’ll be able to update this later, but knowing your income helps us estimate how much you can safely spend. Don’t worry: nothing gets uploaded or shared — we use your data only to estimate for you.",
    img: "/images/step1.png",
  },
  {
    title: "Step 2: Allocate Expenses with Sliders",
    desc: "Move sliders for different categories like Food, Travel, Transportation, Entertainment, and more. As you adjust, you’ll see your budget automatically update. You’ll know exactly where your money is going every month — no math needed and no spreadsheets to wrestle with.",
    img: "/images/step2.png",
  },
  {
    title: "Step 3: Watch Your Budget Come to Life Visually",
    desc: "As you assign amounts to different categories, you’ll notice the live chart update automatically in real-time. This helps you visualize your spending habits and identify areas where you can cut back or adjust. Simple and visual = better decisions.",
    img: "/images/step3.png",
  },
  {
    title: "Step 4: Stay on Budget With Smart Alerts",
    desc: "If the total of your expenses goes beyond your monthly income, don’t worry—we’ll alert you with smart suggestions to help you stay on track. We’ll even remind you when subscriptions or bills are due to avoid surprises. Our system helps you find smarter ways to stretch your budget.",
    img: "/images/step4.png",
  },
];

export default function QuickGuide() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Here Is the Quick <span className="text-indigo-600">Guide.</span>
      </h1>

      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12"
        >
          <img
            src={step.img}
            alt={`Step ${index + 1}`}
            className="w-[140px] h-auto shrink-0"
          />
          <div>
            <h2 className="text-indigo-600 text-lg font-semibold mb-2">
              {step.title}
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
