import Styles from "../../scss/contactForm/contactForm.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { FaMapSigns } from "react-icons/fa";
import formsvg from "../../assets/svg/contact-form.svg";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {

    const headers = new Headers(
      {
        "Content-Type": "application/json"
      }
    )

    const request = new Request(
      "/api/message",
      {
        method: "POST",
        headers,
        body: JSON.stringify(data)
      }
    );

    fetch(request)
      .then((response) => {
        if (response.status !== 200) {
          // This will run if the backend rejected the data
          // Write some code to show an error here!
          return;
        }

        // This will only run if the request was successful
        // Clear the form so that they may send another message if required
        reset();
      });
  };

  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>CONTACT US</h1>
      <h4 className={Styles.h4}>
        Any questions or remarks? Don’t hesitate to contact us.
      </h4>

      {/* ---------Quic access contact cards--------- */}
      <div className={Styles.contactCards}>
        <a href="http://goo.gl/maps/AsGcfK9bQaGSModB7" target={'_blank'}>
          <div className={Styles.card}>
            <div className={Styles.cardIcon}>
              <FaMapSigns />
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

      <div className={Styles.contactForm}>
        <img src={formsvg} alt="form SVG" className={Styles.formSVG} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={Styles.form}
        >
          <div className={Styles.inputField}>
            <div className={Styles.errorContainer}>
              <label htmlFor="name">Name</label>
              <div className={Styles.inputIconContainer}>
                <BsPerson className={Styles.formIcon} />
                <input
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[A-Za-z ]+$/i,
                      message: "Invalid name",
                    },
                  })}
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <p className={Styles.errorMsg}>{errors.name?.message}</p>
            </div>
          </div>

          <div className={Styles.inputField}>
            <div className={Styles.errorContainer}>
              <label htmlFor="email">Email</label>
              <div className={Styles.inputIconContainer}>
                <IoMailOutline className={Styles.formIcon} />
                <input
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Wrong email.",
                    },
                  })}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="someone@gmail.com"
                />
              </div>

              <p className={Styles.errorMsg}>{errors.email?.message}</p>
            </div>
          </div>

          <div className={Styles.inputField}>
            <div className={Styles.errorContainer}>
              <label htmlFor="phone">Phone No.</label>
              <div className={Styles.inputIconContainer}>
                <MdOutlinePhone className={Styles.formIcon} />
                <input
                  {...register("phone", {
                    required: "Phone number is required.",
                    pattern: {
                      value:
                        /^(?:0|94|\+94|0094)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/i,
                      message: "Wrong phone number.",
                    },
                  })}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+94XXXXXXXXX"
                />
              </div>
              <p className={Styles.errorMsg}>{errors.phone?.message}</p>
            </div>
          </div>

          <div className={Styles.inputField}>
            <div className={Styles.errorContainer}>
              <label htmlFor="textarea">Message</label>
              <div className={Styles.inputIconContainer}>
                <FiMessageSquare className={Styles.formIcon} />
                <textarea
                  {...register("message", {
                    required: "You need enter a message",
                    minLength: {
                      value: 30,
                      message: "Message need to contain at least 30 characters",
                    },
                  })}
                  name="message"
                  id="message"
                />
              </div>
              <p className={Styles.errorMsg}>{errors.message?.message}</p>
            </div>
          </div>
          <input
            type="submit"
            className={Styles.formButton}
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
