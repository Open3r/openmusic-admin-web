import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #f8f9fa;    
    padding-top: 4rem;
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Pretendard', sans-serif;
    margin-bottom: 1rem;
`

export const BannerEmptyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-family: 'Pretendard', sans-serif;
`

export const BannerEmptyTitle = styled.p`
`

export const BannerCreateButton = styled(Link)`
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #343a40;
    color: white;
    font-size: 1rem;
    text-decoration: none;
    font-family: 'Pretendard', sans-serif;
    cursor: pointer;
`

export const BannerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media (max-width: 840px) {
        flex-direction: column;
        align-items: center;
    }
`