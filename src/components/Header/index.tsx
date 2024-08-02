import { Container, Logo, LogoImage, LogoText, Nav, NavItem } from "./style";

const Header = () => {
  return (
    <Container>
      <Logo to="/">
        <LogoImage src="/logo.png" alt="logo" />
        <LogoText>OpenMusic Admin</LogoText>
      </Logo>

      <Nav>
        <NavItem to="/banners">배너</NavItem>
        <NavItem to="/playlists">플레이리스트</NavItem>
        <NavItem to="/songs">노래</NavItem>
        <NavItem to="/albums">앨범</NavItem>
        <NavItem to="/users">유저</NavItem>
      </Nav>
    </Container>
  );
};

export default Header;
