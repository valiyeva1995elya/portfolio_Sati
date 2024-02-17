
import "./style.css";

function Photo() {
  const photos = JSON.parse(localStorage.getItem("photos"));
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          cursor: "pointer",
        }}
      >
        <img
          src={photos.img}
          alt=""
          style={{ width: "80%", height: "auto" }}
          // onClick={() => navigate(`/university/${university._id}`)}
        />
      </div>
    </>
  );
}
export default Photo;
