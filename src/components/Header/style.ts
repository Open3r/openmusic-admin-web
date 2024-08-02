import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100%;
    height: 4rem;
    font-family: 'Pretendard', sans-serif;
`

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
`

export const LogoImage = styled.img`
    width: 2rem;
    height: 2rem;
`

export const LogoText = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: white;
    margin-left: 0.5rem;
`

export const Nav = styled.nav`
    display: flex;
    gap: 1rem;
`

export const NavItem = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`