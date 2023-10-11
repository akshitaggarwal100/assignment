import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import emailjs from '@emailjs/browser'
import './Contact.css'

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm('service_y77viee', 'template_2g9gy38', e.target, 'Y_u_i4ZiG9i7-N8uS')
      .then((result) => {
        alert('Message Sent Successfully!');
      }, (error) => {
        console.log('AW Snap!');
      })
  }

  return (
    <>
      <Header />

      <h1 className="contactHeading">Contact with us</h1>

      <main className="contact">
        <form className="formBox" action="developers@webalar.in" method="post" onSubmit={sendEmail}>
          <div className="formHeader">
            <h2 className="formHeading">Tell us about your project</h2>
            <p className="formPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum lobortis mi vulputate potenti orci.</p>
          </div>

          <div className="formInputs">
            <label className="input">
              Sender Name
              <input className="inputBox name" type="text" name="from_name" />
            </label>

            <label className="input">
              Receiver Name
              <input className="inputBox name" type="text" name="to_name" />
            </label>

            <div className="secondRow">
              <label className="input email">
                From Email
                <input className="inputBox" type="email" name="from_email" id="" />
              </label>

              <label className="input number">
                To Email
                {/* <input className="inputBox" type="email" name="to_email" min={10000000} max={9999999999} /> */}
                <input className="inputBox" type="email" name="to_email" min={10000000} max={9999999999} />
              </label>
            </div>

            <label className="input message">
              Your Message
              <textarea className="inputBox messageBox" name="message" id="" />
            </label>

            <button className="submitButton">Submit</button>
          </div>
        </form>

        <aside className='sideInfo'>
          <div className="sideInfoBlock">
            <h2 className="sideInfoHeading">Address</h2>
            <p>0199 Taylor Park, North Dakota, USA</p>
          </div>

          <div className="sideInfoBlock">
            <h2 className="sideInfoHeading">Call us on</h2>
            <p>+1 98723 42023</p>
            <p>info@logoipsum.com</p>
          </div>

          <h2 className="sideInfoHeading">Social Media</h2>
          <div className='sideSocialMediaIcons'>
            <div className='sideIcon'>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 0C2.243 0 0 2.243 0 5V13C0 15.757 2.243 18 5 18H13C15.757 18 18 15.757 18 13V5C18 2.243 15.757 0 13 0H5ZM5 2H13C14.654 2 16 3.346 16 5V13C16 14.654 14.654 16 13 16H5C3.346 16 2 14.654 2 13V5C2 3.346 3.346 2 5 2ZM14 3C13.7348 3 13.4804 3.10536 13.2929 3.29289C13.1054 3.48043 13 3.73478 13 4C13 4.26522 13.1054 4.51957 13.2929 4.70711C13.4804 4.89464 13.7348 5 14 5C14.2652 5 14.5196 4.89464 14.7071 4.70711C14.8946 4.51957 15 4.26522 15 4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3ZM9 4C6.243 4 4 6.243 4 9C4 11.757 6.243 14 9 14C11.757 14 14 11.757 14 9C14 6.243 11.757 4 9 4ZM9 6C10.654 6 12 7.346 12 9C12 10.654 10.654 12 9 12C7.346 12 6 10.654 6 9C6 7.346 7.346 6 9 6Z" fill="#333333" />
              </svg>
            </div>

            <div className='sideIcon'>
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 -0.00100708C19.22 0.461993 17.655 1.09299 16.735 1.27499C16.708 1.28199 16.686 1.29099 16.66 1.29799C15.847 0.495993 14.733 -0.00100708 13.5 -0.00100708C11.015 -0.00100708 9 2.01399 9 4.49899C9 4.62999 8.989 4.87099 9 4.99899C5.647 4.99899 3.095 3.24299 1.265 0.998993C1.066 1.49899 0.979 2.28899 0.979 3.03099C0.979 4.43199 2.074 5.80799 3.779 6.66099C3.465 6.74199 3.119 6.79999 2.759 6.79999C2.178 6.79999 1.563 6.64699 1 6.18299C1 6.19999 1 6.21599 1 6.23399C1 8.19199 3.078 9.52499 4.926 9.89599C4.551 10.117 3.795 10.139 3.426 10.139C3.166 10.139 2.246 10.02 2 9.97399C2.514 11.579 4.368 12.481 6.135 12.513C4.753 13.597 3.794 13.999 0.964 13.999H0C1.788 15.145 4.065 16 6.347 16C13.777 16 18 10.337 18 4.99899C18 4.91299 17.998 4.73299 17.995 4.55199C17.995 4.53399 18 4.51699 18 4.49899C18 4.47199 17.992 4.44599 17.992 4.41899C17.989 4.28299 17.986 4.15599 17.983 4.08999C18.773 3.51999 19.458 2.80899 20 1.99899C19.275 2.32099 18.497 2.53699 17.68 2.63499C18.514 2.13499 19.699 0.942993 20 -0.00100708ZM16 4.99899C16 9.07899 13.043 13.398 7.534 13.942C8.28 13.413 9 12.662 9 12.662C9 12.662 6 9.99999 5.775 6.52199C6.81 6.83799 7.888 6.99899 9 6.99899H11V4.49899C11 4.49799 11 4.49799 11 4.49799C11.002 3.11799 12.12 1.99999 13.5 1.99999C14.881 1.99999 16 3.11899 16 4.49999C16 4.49999 16 4.91999 16 4.99899Z" fill="#333333" />
              </svg>
            </div>

            <div className='sideIcon'>
              <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.525 6.99994H7V4.99994C7 3.96794 7.084 3.31794 8.563 3.31794H10.431V0.13794C9.522 0.0439404 8.608 -0.00205957 7.693 -5.95703e-05C4.98 -5.95703e-05 3 1.65694 3 4.69894V6.99994H0V10.9999L3 10.9989V19.9999H7V10.9969L10.066 10.9959L10.525 6.99994Z" fill="#333333" />
              </svg>
            </div>
          </div>
        </aside>

      </main>

      <Footer />
    </>
  )
}