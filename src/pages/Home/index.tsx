import { Container, GoToBannerListButton } from "./style";

const Home = () => {
  return (
    <Container>
      <GoToBannerListButton to="/banners">배너 목록</GoToBannerListButton>
    </Container>
  );
};

export default Home;
