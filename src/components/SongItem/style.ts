import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const Container = styled.div`
    display: flex;
    border: 1px solid black;
    flex-direction: column;
    border-radius: 1rem;
    overflow: hidden;
    width: 16rem;
    height: 18rem;
    position: relative;
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
    height: 2rem;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;

    &:hover {
        background-color: #c82333;
    }
`

export const SongImage = styled.img`
    width: 16rem;
    height: 16rem;
    object-fit: cover;
    object-position: center;
    position: absolute;
`

export const SongTitle = styled(Link)`
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    padding: 1rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: rgba(0, 0, 0, 0.7);
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    position: absolute;
    bottom: 2.5rem;
    right: 0.5rem;
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`

