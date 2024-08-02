import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background-color: #000;
    width: 100%;
    height: 100vh;
    padding-top: 4rem;
`

export const GoToBannerListButton = styled(Link)`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #343a40;
    color: white;
    font-size: 1rem;
    text-decoration: none;
    font-family: 'Pretendard', sans-serif;
    cursor: pointer;

    &:hover {
        background-color: #495057;
    }
`