import React from 'react'

function MainSection() {
    return (
        <div className='lg:h-[100vh] pb-20 lg:pb-0 lg:pl-36 w-full flex lg:flex-row flex-col-reverse '>
            <div className='lg:w-[40%]  lg:mt-44 lg:scale-110 lg:text-left text-center '>
                <h1 className='text-indigo-950 text-5xl lg:w-2/3 lg:mt-0 mt-3'>Next generation digital banking</h1>
                <p className='text-gray-500 mt-5 lg:w-[60%] '>Take your financial life online. Your Easybank account will be a one-shop for spending, saving budgeting, investing, and much more.</p>
                <button className="mt-5 hover:from-green-300 hover:to-green-600 ml-auto bg-gradient-to-tr from-green-300 to-green-500 px-6 py-2 font-medium text-xs text-white rounded-2xl ">Request invite</button>
            </div>

            <div className='lg:w-[60%] w-full mt-[-120px]'>
                <div className='bg-[url("/images/bg-intro-mobile.svg")]   lg:bg-[url("/images/bg-intro-desktop.svg")] bg-cover lg:bg-contain bg-no-repeat w-full bg-center h-full overflow-hidden '><img src="images/image-mockups.png" width="auto" height="auto" className='lg:hidden' alt="" /></div>
                <img src="images/image-mockups.png" width="auto" height="auto" className='lg:mt-[-110vh] lg:ml-56 hidden lg:block' alt="" />
            </div>
        </div>
    )
}

export default MainSection