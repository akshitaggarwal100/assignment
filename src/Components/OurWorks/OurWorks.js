import './OurWorks.css'
import WorkCard from './WorkCard/WorkCard'

export default function OurWorks() {
    return (
        <section className="ourWorks">
            <h1 className="worksHeading">Our Works</h1>
            <div className='worksContainer'>
                <WorkCard title='Project 1' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                <WorkCard title='Project 2' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                <WorkCard title='Project 3' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
            </div>
            <button className='viewMoreBtn'>View More</button>
        </section>
    )
}