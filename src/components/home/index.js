import "./style.css";
import pic from "../picture/homepage.jpg";
<style>@import url('https://fonts.cdnfonts.com/css/santa-catarina');</style>;
function home() {
  return (
    <div className="home">
      <img className="img" src={pic} alt="" />
      <div className="block-text">
        <p className="text-name">САТИ ИКЛАСОВА</p>
        <p className="txt">МОДЕЛЬНОЕ ПОРТФОЛИО</p>
        <p className="info-text">
          Возраст: <b>5 лет</b>
        </p>
        <p className="info-text">
          Рост: <b>112 см</b>
        </p>
        <p className="info-text">
          Вес: <b>16 кг</b>
        </p>
      </div>
    </div>
  );
}
export default home;
