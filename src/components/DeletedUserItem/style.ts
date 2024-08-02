import styled from "@emotion/styled";

export const UserContainer = styled.div`
    width: 10rem;
    border: 1px solid black;
    border-radius: 0.25rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    font-family: 'Pretendard', sans-serif;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    background-color: white;
`

export const UserAvatar = styled.img`
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid black;
    
`

export const UserNickname = styled.h1`
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Pretendard', sans-serif;
`

export const UserEmail = styled.p`
    font-size: 0.75rem;
    font-family: 'Pretendard', sans-serif;
`

export const UserCreatedAt = styled.p`
    font-size: 0.5rem;
    font-family: 'Pretendard', sans-serif;
`

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 1rem;
`

export const RestoreButton = styled.button`
    padding: 0.5rem;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`