import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const params = useParams();
  return <section>{params.id}</section>;
}
