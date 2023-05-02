import Image from "../Components/Image";
import { useContext } from "react";
import { Context } from "../Context";
import { getClass } from "../utils";

function Photos() {
  const { allPhotos } = useContext(Context);
  const renderedPhotos = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));
  return <main className="photos">{renderedPhotos}</main>;
}

export default Photos;
