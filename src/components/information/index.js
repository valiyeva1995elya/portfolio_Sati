import Header from "../header/index"
import Footer from "../footer";
import "./style.css"
    
function Information(){ 
    return(
        <>
        <Header/>
        <div className="info">
            <p className="info-text">ФИО: <b>Икласова Сати Азаматовна</b></p>
            <p className="info-text">Возраст: <b>5 лет</b></p>
            <p className="info-text">Рост: <b>116 см</b></p>
            <p className="info-text">Вес: <b>20 кг</b></p>
            <p className="info-text">Хобби: <b>Художественная гимнастика, рисование</b></p>
            
        </div>
        <Footer/>
        </>
    )
}
export default Information