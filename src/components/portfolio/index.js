import "./style.css";
import Header from "../header/index";
import Footer from "../footer";
import img1 from "../picture/1.JPG";
import img2 from "../picture/2.JPG";
import img3 from "../picture/3.JPG";
import img4 from "../picture/4.JPG";
import img5 from "../picture/5.JPG";
import img6 from "../picture/6.JPG";
import img7 from "../picture/7.JPG";
import img8 from "../picture/8.JPG";
import img9 from "../picture/9.JPG";
import img10 from "../picture/10.JPG";
import img11 from "../picture/11.JPG";
import img12 from "../picture/12.JPG";
import img13 from "../picture/13.JPG";
import img14 from "../picture/14.JPG";
import img15 from "../picture/15.JPG";
import img16 from "../picture/16.JPG";
import img17 from "../picture/17.JPG";
import img18 from "../picture/18.JPG";
import img19 from "../picture/19.JPG";
import img20 from "../picture/20.JPG";
import img21 from "../picture/21.JPG";
import img22 from "../picture/22.JPG";
import img23 from "../picture/23.JPG";
import img24 from "../picture/24.JPG";
import img25 from "../picture/25.JPG";
import img26 from "../picture/26.JPG";
function Portfolio() {
  let photos = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
    { img: img10 },
    { img: img11 },
    { img: img12 },
    { img: img13 },
    { img: img14 },
    { img: img15 },
    { img: img16 },
    { img: img17 },
    { img: img18 },
    { img: img19 },
    { img: img20 },
    { img: img21 },
    { img: img22 },
    { img: img23 },
    { img: img24 },
    { img: img25 },
    { img: img26 },
  ];
  return (
    <>
      <Header />
      <div className="photo">
        {photos.map((item, index) => (
          <img src={item.img} alt="" key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
}
export default Portfolio;
