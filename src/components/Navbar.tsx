function Navbar() {
    return (
        <div className="h-16 w-full z-100 flex flex-row lg:pl-36  items-center shadow-md bg-white pl-10 pr-10 relative">
            <div className="lg:scale-150 scale-110"> <img src="/images/logo.svg" width="auto" height="auto" alt="easy bank logo" /></div>
            <div className="hidden lg:flex flex-row h-full gap-5 ml-24 text-gray-500 font-semibold ">
                <span className="flex items-center h-full hover:border-b-4 hover:cursor-pointer hover:border-b-green-500">Home</span>
                <span className="flex items-center h-full hover:border-b-4 hover:cursor-pointer hover:border-b-green-500">About</span>
                <span className="flex items-center h-full hover:border-b-4 hover:cursor-pointer hover:border-b-green-500">Contact</span>
                <span className="flex items-center h-full hover:border-b-4 hover:cursor-pointer hover:border-b-green-500">Blog</span>
                <span className="flex items-center h-full hover:border-b-4 hover:cursor-pointer hover:border-b-green-500">Careers</span>
            </div>
            <div className="  hidden z-10 h-full w-full bg-white ml-auto lg:flex items-center justify-end lg:pr-36">
                <button name="invite-btn" className=" hover:from-green-300 hover:to-green-600 bg-gradient-to-tr from-green-300 to-green-500 px-6 py-2 font-medium text-xs text-white rounded-2xl scale-110">Request invite</button>
            </div>
            <button name="open-sidebar" className="bg-[url('images/icon-hamburger.svg')] bg-cover bg-center ml-auto w-6 h-1/4 scale-125 lg:hidden"></button>
        </div>
    )
}

export default Navbar