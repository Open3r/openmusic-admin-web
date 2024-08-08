import styled from "@emotion/styled";

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

export const DeletedSongWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`