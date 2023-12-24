import Header from "../header/index";
import Footer from "../footer";
import "./style.css";

function Contact() {
  return (
    <>
      <Header />
      <div className="contact">
        <p className="info-text">
          email: <b>iklassova.sati@gmail.com </b>{" "}
        </p>
        <p className="info-text">
          тел: <b> 8 (702) 960 20 10 </b>{" "}
        </p>
        <p className="info-text">
          instagram:{" "}
          <b>
            <a href="https://www.instagram.com/iklassova.sati?igsh=MTF6OHN4OXdrcnQyMA==">
              @iklassova.sati
            </a>
          </b>
        </p>
        <p className="info-text">
          pinterest:{" "}
          <b>
            <a href="https://www.pinterest.com/ayaclass01/_created">
              Sati Class
            </a>
          </b>
        </p>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
