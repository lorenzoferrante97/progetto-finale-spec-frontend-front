import { useParams } from "react-router-dom";

export default function Detail() {

  const {id} = useParams();
  
  return (
    <>
      <div>Detail Page Single Videogame</div>
    </>
  );
}
