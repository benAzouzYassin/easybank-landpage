interface CardProps {
    imgUrl: string
    title: string
    description: string
}
function SecondSectionCard(props: CardProps) {
    return <div className='mt-10'>
        <div className="w-full ">
            <img src={props.imgUrl} className="ml-auto mr-auto lg:ml-0 lg:mr-0" alt="" />
        </div>
        <h3 className='mt-8 text-3xl '>{props.title}</h3>
        <p className='mt-5 text-lg lg:w-[70%] text-gray-400 '>{props.description}</p>
    </div>

}
export default SecondSectionCard