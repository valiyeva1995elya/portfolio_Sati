import "./style.css";
import pic from "../picture/20.JPG";
function home() {
  return (
    <div className="home">
      <img className="img" src={pic} alt="" />
      <div className="block-text">
        <p className="text-name">САТИ ИКЛАСОВА</p> 
        <p className="txt">МОДЕЛЬНОЕ ПОРТФОЛИО</p>
      </div>
    </div>
  );
}
export default home;
