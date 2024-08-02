import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #f8f9fa;
`

export const LoginWrapper = styled.div`
    width: 20rem;
    height: 20rem;
    padding: 1rem;
    border: 1px solid #ced4da;
    border-radius: 4px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
    gap: 1rem;
`

export const LoginTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Pretendard', sans-serif;
    margin-bottom: 1rem;
`

export const EmailWrapper = styled.div`
    display: flex;
    align-items: start;
    gap: 0.5rem;
    flex-direction: column;
    width: 16rem;
`

export const EmailLabel = styled.p`
    margin-right: 0.5rem;
`

export const EmailInput = styled.input`
    padding: 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 4px;
    width: 100%;
`

export const PasswordWrapper = styled.div`
    display: flex;
    align-items: start;
    gap: 0.5rem;
    flex-direction: column;
    width: 16rem;
`

export const PasswordLabel = styled.p`
    margin-right: 0.5rem;
`

export const PasswordInput = styled.input`
    padding: 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 4px;
    width: 100%;
`

export const LoginButton = styled.button`
    padding: 0.5rem;
    width: 16rem;
    border: 1px solid #ced4da;
    border-radius: 4px;
    background-color: #343a40;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        background-color: #495057;
    }
`