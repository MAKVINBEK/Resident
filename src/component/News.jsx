import { useParams } from "react-router-dom";

const News = () => {
  const { type, id } = useParams();

  if (type === "interviews") {
    return <Hotel_Interviews id={id} />;
  } else if (type === "nedvij") {
    return <Nedvij id={id} />;
  } else if (type === "projects") {
    return <Projects id={id} />;
  } else {
    return <p>Страница не найдена!</p>;
  }
};

export default News;
