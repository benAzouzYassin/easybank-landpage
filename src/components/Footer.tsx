
function Footer() {
    return (
        <div className='bg-indigo-950 mt-16 items-center text-center lg:text-left  lg:h-[30vh] text-white flex flex-col lg:flex-row lg:pr-36 lg:pl-36 gap-10 pt-10 pb-10 '>
            <div className='flex flex-col'>
                <div><img src="images/footer-logo.svg" className=' text-white' alt="" /> </div>
                <div className=' flex flex-row  mt-5 gap-2'>
                    <div className="w-6">
                        <img src="images/icon-facebook.svg" alt="" width="auto" height="auto" />
                    </div>
                    <div className="w-6">
                        <img src="images/icon-youtube.svg" alt="" width="auto" height="auto" />
                    </div>
                    <div className="w-6">
                        <img src="images/icon-twitter.svg" alt="" width="auto" height="auto" />
                    </div>
                    <div className="w-6">
                        <img src="images/icon-pinterest.svg" alt="" width="auto" height="auto" />
                    </div>
                    <div className="w-6">
                        <img src="images/icon-instagram.svg" alt="" width="auto" height="auto" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 lg:ml-20'>
                <a href="">About Us</a><a href="">Contact</a><a href="">Blog</a>
            </div>
            <div className='flex flex-col gap-2 lg:ml-20'>
                <a href="">Careers</a><a href="">Support</a><a href="">Privacy Policy</a>
            </div>
            <div className='lg:ml-auto flex flex-col '>
                <button name="invite-btn" className=" hover:from-green-300 hover:to-green-600 bg-gradient-to-tr from-green-300 to-green-500 px-6 py-2 font-medium text-xs text-white rounded-2xl w-36 self-center scale-110">Request invite</button>
                <p className=' mt-8 text-gray-500'>
                    © Easybank. All Rights Reserved
                </p>


            </div>

        </div>
    )
}

export default Footer