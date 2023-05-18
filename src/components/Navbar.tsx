function Navbar() {
    return (
        <div className="h-16 w-full flex flex-row lg:pl-36 lg:pr-36 items-center shadow-md">
            <div className=""> <img src="/images/logo.svg" width="auto" height="auto" alt="easy bank logo" /></div>
            <div className="flex flex-row h-full gap-5 ml-24 text-gray-400 font-semibold ">
                <span className="flex items-center h-full hover:border-b-4 hover:cursor-pointer hover:border-b-green-500">Home</span>
                <span className="flex items-center h-full hover:border-b-4 hover:cursor-pointer hover:border-b-green-500">About</span>
                <span className="flex items-center h-full hover:border-b-4 hover:cursor-pointer hover:border-b-green-500">Contact</span>
                <span className="flex items-center h-full hover:border-b-4 hover:cursor-pointer hover:border-b-green-500">Blog</span>
                <span className="flex items-center h-full hover:border-b-4 hover:cursor-pointer hover:border-b-green-500">Careers</span>
            </div>
            <button className="hover:from-green-300 hover:to-green-600 ml-auto bg-gradient-to-tr from-green-300 to-green-500 px-6 py-2 font-medium text-xs text-white rounded-2xl">Request invite</button>
        </div>
    )
}

export default Navbar