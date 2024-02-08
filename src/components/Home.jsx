import Hero from "./Hero";
import Row from "./Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Hero />
      <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default Home;
