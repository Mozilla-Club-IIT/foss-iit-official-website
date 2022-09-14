import React from "react";
import Styles from "../../scss/contactForm/contactForm.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrDirections } from "react-icons/gr";
import { HiMailOpen } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import { TiMessageTyping } from "react-icons/ti";
import formsvg from "../../assets/svg/contact-form.svg";

function ContactForm() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>CONTACT US</h1>
      <h4 className={Styles.h4}>
        Any questions or remarks? Don’t hesitate to contact us.
      </h4>

      {/* ---------Quic access contact cards--------- */}
      <div className={Styles.contactCards}>
        <a href="http://goo.gl/maps/AsGcfK9bQaGSModB7">
          <div className={Styles.card}>
            <div className={Styles.cardIcon}>
              <GrDirections />
            </div>
            <h3>Address</h3>
            <p>Informatics Institute of Technology</p>
            <p> 57, Ramakrishna Road,</p>
            <p> Colombo 06</p>
          </div>
        </a>

        <div className={Styles.card}>
          <div className={Styles.cardIcon}>
            <BsFillTelephoneFill />
          </div>
          <h3>Phone</h3>
          <p>+94 (71) 826 0469 </p>
          <p>+94 (76) 195 5252</p>
        </div>

        <div className={Styles.card}>
          <div className={Styles.cardIcon}>
            <HiMailOpen />
          </div>
          <h3>Email</h3>
          <p>mozillaclub@iit.ac.lk</p>
        </div>
      </div>

      {/* -----------------Contact form----------------- */}
      <section className={Styles.formSection}>
        <img src={formsvg} alt="form SVG" className={Styles.formSVG} />
        <div className={Styles.contactForm}>
          <form action="" method="get" className={Styles.form}>
            <div className={Styles.inputField}>
              <label htmlFor="name">Name</label>
              <BsPerson className={Styles.formIcon} />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                form="form"
                required
              />
            </div>

            <div className={Styles.inputField}>
              <label htmlFor="email">Email</label>
              <HiOutlineMail className={Styles.formIcon} />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="someone@gmail.com"
                form="contactField"
                required
              />
            </div>

            <div className={Styles.inputField}>
              <label htmlFor="phone">Phone No.</label>
              <MdOutlinePhone className={Styles.formIcon} />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="+94206934691"
                form="contactField"
                required
              />
            </div>

            <div className={Styles.inputField}>
              <label htmlFor="textarea">Message</label>
              <TiMessageTyping className={Styles.formIcon} />
              <textarea
                name="textarea"
                id="textarea"
                form="contactField"
                cols={2}
                required
              ></textarea>
            </div>

            <button type="button" form="form" className={Styles.formButton}>
              Send Messsage
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
