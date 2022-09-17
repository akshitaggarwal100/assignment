import './HomeMid.css'
import TrustedComp from './TrustedCompanies/TrustedComp'
import Services from './Services/Services'

export default function HomeMid() {
    return (
        <section className='homeMid'>
            <TrustedComp />
            <Services />
        </section>
    )
}
