import './WorkCard.css'

export default function WorkCard({ title, desc }) {
    return (
        <div className='workCard'>
            <div className='workImg'>

            </div>
            <div className='cardBottom'>
                <div className='workDetails'>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <img className='workButton' src={require('./workButton.png')} alt="" />
            </div>
        </div>
    )
}