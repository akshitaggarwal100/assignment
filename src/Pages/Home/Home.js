import Header from "../../Components/Header/Header"
import HomeMid from "../../Components/HomeMid/HomeMid"
import OurWorks from "../../Components/OurWorks/OurWorks"
import Footer from "../../Components/Footer/Footer"
import './Home.css'

export default function Home() {
  return (
    <>
      <Header />
      <main className="home">
        <section className="topSection">
          <div className="topText">
            <h1 className="topTextHeading">Let's create something great together</h1>
            <p className="topTextPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nec ultrices venenatis in. Sed elit aenean mattis vulputate aliquet vitae.</p>
            <button className='topButton'>let's talk</button>
          </div>
          <img className="topImg" src={require("./topImg.jpg")} alt="topImage" />
        </section>

        <HomeMid />

        <OurWorks />

      </main>
      <Footer />
    </>
  )
}
