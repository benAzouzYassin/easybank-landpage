import React from 'react'
import SecondSectionCard from './SecondSectionCard'

function SecondSection() {
    return (
        <div className='h-fit pb-44 bg-[#f4f5f9] lg:pl-36 lg:pr-36 pt-32 '>
            <div>
                <h1 className='text-3xl text-indigo-950 font-medium'>Why choose Easybank?</h1>
                <p className='mt-3 text-slate-500  text-xl w-5/12'>We levrage Open Banking to turn your bank account into your financial hub.
                    Control your finances like never before.
                </p>
            </div>
            <div className='grid lg:grid-cols-4 gap-5 mt-10'>
                <SecondSectionCard title='Online Banking' imgUrl='images/icon-online.svg' description='Our modern web and mobile applications allow you to keep track if your finances wherever you are in the world' />
                <SecondSectionCard title='Simple Budgeting' imgUrl='images/icon-budgeting.svg' description="See exactly where your money goes each. Receive notifactions when you're clse to hitting your limits.  " />
                <SecondSectionCard title='Fast Onboarding' imgUrl='images/icon-onboarding.svg' description="We don't do branches. Open your account in minutes and start taking control of your finances right away." />
                <SecondSectionCard title='Open API' imgUrl='images/icon-api.svg' description="Mange your savings, investments, pension, and much more from one account. Tracking your money has never been easier." />
            </div>
        </div>
    )
}


export default SecondSection