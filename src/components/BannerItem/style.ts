import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    border: 1px solid black;
    flex-direction: column;
    border-radius: 0.25rem;
    overflow: hidden;
    width: 840px;
    height: 168px;
`

export const DeleteButton = styled.button`
    padding: 0.5rem;
    background-color: #dc3545;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    height: 3rem;

    &:hover {
        background-color: #c82333;
    }
`

export const BannerImage = styled.img`
    width: 840px;
    height: 120px;
`