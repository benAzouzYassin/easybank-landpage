import React from 'react'

function MainSection() {
    return (
        <div className='h-[110vh]  lg:pl-36 w-full flex flex-row'>
            <div className='w-[40%] mt-44 scale-110'>
                <h1 className='text-indigo-950 text-5xl w-2/3 '>Next generation digital banking</h1>
                <p className='text-gray-500 mt-4 w-[60%]'>Take your financial life online. Your Easybank account will be a one-shop for spending, saving budgeting, investing, and much more.</p>
                <button className="mt-5 hover:from-green-300 hover:to-green-600 ml-auto bg-gradient-to-tr from-green-300 to-green-500 px-6 py-2 font-medium text-xs text-white rounded-2xl">Request invite</button>
            </div>
            {/**TODO : put the svgs here */}
            <div className='w-[60%]'>
                <div className='bg-[url("/images/bg-intro-desktop.svg")] bg-contain bg-no-repeat w-full bg-center h-full overflow-hidden'>
                    <img src="images/image-mockups.png" width="auto" height="auto" className='mt-[-100px] ml-56' alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainSection