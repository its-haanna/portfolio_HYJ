import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ImageContext from "../../ImageContext";

function Cheon_Jaeseung() {
  const { clickedImg, setClickedImg } = useContext(ImageContext);
  const images = Object.keys(
    import.meta.glob("../../../public/assets/Commissioned/Cheon_Jaeseung/*", {
      as: "raw",
    })
  );
  const imagesHtml = images.map((url, i) => (
    <Link to={`${i + 1}`} key={i} onClick={() => setClickedImg(i)}>
      <img src={`/${url.match(/public\/(.*)/)[1]}`} alt="" key={i} />
    </Link>
  ));

  return (
    <ImageContext.Consumer>
      {({ clickedImg, setClickedImg }) => {
        return <div className="img-grid">{imagesHtml}</div>;
      }}
    </ImageContext.Consumer>
  );
}

export default Cheon_Jaeseung;
