import './Services.css'

export default function Services() {
    return (
        <div className='services'>
            <div className='servicesTop'>
                <h2>Our services that we provide</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu. Laoreet orci nisl etiam risus ut nec. Facilisi ipsum viverra diam arcu massa amet non metus ornare.</p>
            </div>

            <div className='servicesBottom'>
                <div className="service border">
                    <img className='serviceImg' src={require('./service1.png')} alt="Design" />
                    <h3>Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.</p>
                </div>

                <div className="service border">
                    <img className='serviceImg' src={require('./service2.png')} alt="Development" />
                    <h3>Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.</p>
                </div>

                <div className="service">
                    <img className='serviceImg' src={require('./service3.png')} alt="Marketing" />
                    <h3>Marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam arcu.</p>
                </div>
            </div>
        </div>
    )
}
