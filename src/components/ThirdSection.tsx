import React from 'react'

function ThirdSection() {
    return (
        <div className='lg:h-[90vh] h-fit lg:pr-36 lg:pl-36 '>
            <h1 className='mt-16 text-5xl text-center'>Latest Articles</h1>
            <div className='grid lg:grid-cols-4 gap-8 mt-20 pl-10 mr-10'>
                <ThirdSectionArticle imgUrl='/images/image-currency.jpg' author='Claire Robinson' title='Receive money in any currency with no fees' key={1} details="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in single... " />
                <ThirdSectionArticle imgUrl='/images/image-restaurant.jpg' author='Willson Hutton' title='Treat yourself without worrying about money' key={2} details="Our simple budgeting feature allows you to speparate out your spending and set realistic limits each month. That means you..." />
                <ThirdSectionArticle imgUrl='/images/image-plane.jpg' author='Willson Hutton' title='Take your Easybank card wherever you go' key={3} details="We want you to enjoy travels.This is why we don't charge any fees on purchases while you'rer abroad. We'll evene show you..." />
                <ThirdSectionArticle imgUrl='/images/image-confetti.jpg' author='Claire Robinson' title='Our invite-only Beta accounts are now live!' key={4} details="After a lot of hard work by th whole team.we're excitedd ti lanch our closed beta. It's easy to request and invite through the site... " />

            </div>
        </div>
    )
}

interface ArticleProps {
    imgUrl: string
    author: string
    title: string
    details: string
}
function ThirdSectionArticle(props: ArticleProps) {
    return <div className='flex flex-col shadow-xl h-86 pb-10 rounded-md hover:cursor-pointer hover:scale-105'>
        <img className='rounded-t-2xl' src={props.imgUrl} width="100%" height="40%" alt="" />
        <div className='pl-5 pr-5'>

            <p className='mt-5 text-xs text-gray-500'>By{props.author}</p>
            <h3 className='text-lg mt-4'>{props.title}</h3>
            <p className='text-sm mt-3 text-gray-500'>{props.details}</p>
        </div>
    </div>
}
export default ThirdSection