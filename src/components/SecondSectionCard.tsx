interface CardProps {
    imgUrl: string
    title: string
    description: string
}
function SecondSectionCard(props: CardProps) {
    return <div className='mt-10'>
        <img src={props.imgUrl} alt="" />
        <h3 className='mt-8 text-3xl '>{props.title}</h3>
        <p className='mt-5 text-lg w-[70%] text-gray-400 '>{props.description}</p>
    </div>

}
export default SecondSectionCard