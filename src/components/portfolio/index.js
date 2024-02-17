import { Link } from "react-router-dom";
import "./style.css";
import Header from "../header/index";
import Footer from "../footer";
import img4 from "../picture/4.JPG";
import img5 from "../picture/5.JPG";
import img6 from "../picture/6.JPG";
import img7 from "../picture/7.JPG";
import img8 from "../picture/8.JPG";
import img9 from "../picture/9.JPG";
import img9a from "../picture/9-1.JPG";
import img10 from "../picture/10.JPG";
import img11 from "../picture/11.JPG";
import img11a from "../picture/11-2.JPG";
import img12 from "../picture/12.JPG";
import img13 from "../picture/13.JPG";
import img15 from "../picture/15.JPG";
import img16 from "../picture/16.JPG";
import img14 from "../picture/14.JPG";
import img19 from "../picture/19.JPG";
import img20 from "../picture/20.JPG";
import img21 from "../picture/21.JPG";
import img18 from "../picture/18.JPG";
import img18a from "../picture/18-1.JPG";
import img22 from "../picture/22.JPG";
import img24 from "../picture/24.JPG";
import img25 from "../picture/25.JPG";
import img26 from "../picture/26.JPG";
import img27 from "../picture/27.JPG";
import img28 from "../picture/28.JPG";
import img29 from "../picture/29.JPG";
import img30 from "../picture/30.JPG";
import img31 from "../picture/31.JPG";
function Portfolio() {
  let photos = [
    { img: img5, id: 1 },
    { img: img4, id: 2 },
    { img: img6, id: 3 },
    { img: img7, id: 4 },
    { img: img16, id: 5 },
    { img: img14, id: 6 },
    { img: img15, id: 7 },
    { img: img8, id: 8 },
    { img: img9, id: 9 },
    { img: img9a, id: 10 },
    { img: img10, id: 11 },
    { img: img12, id: 12 },
    { img: img11a, id: 13 },
    { img: img11, id: 14 },
    { img: img13, id: 15 },
    { img: img19, id: 16 },
    { img: img20, id: 17 },
    { img: img21, id: 18 },
    { img: img22, id: 19 },
    { img: img18, id: 20 },
    { img: img18a, id: 21 },
    { img: img26, id: 22 },
    { img: img27, id: 23 },
    { img: img25, id: 24 },
    { img: img24, id: 25 },
    { img: img28, id: 26 },
    { img: img29, id: 27 },
    { img: img30, id: 28 },
    { img: img31, id: 29 },
  ];
  localStorage.setItem("photos", JSON.stringify(photos));
  return (
    <>
      <Header />
      <div className="block-portfolio">
        <div className="photo">
          {photos.map((item, index) => (
            <Link to={`${index}`}>
              <img className="img-port" src={item.img} alt="" key={index} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Portfolio;
