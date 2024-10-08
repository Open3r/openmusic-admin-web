import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const Container = styled.div`
    width: 16rem;
    height: 18rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    font-family: 'Pretendard', sans-serif;
    overflow: hidden;
    position: relative;
`

export const AlbumImage = styled.img`
    width: 16rem;
    height: 16rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    object-position: center;
`

export const AlbumTitle = styled(Link)`
    border-top: 1px solid black;
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    padding: 1rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    background-color: #f8f9fa;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
    text-decoration: none;
    color: black;
    
    &:hover {
        background-color: #f1f3f5;
    }
`

export const AlbumDeleteButton = styled.button`
    padding: 0.5rem;
    background-color: #dc3545;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    height: 3rem;
    position: absolute;
    top: 0;
    right: 0;

    &:hover {
        background-color: #c82333;
    }
`