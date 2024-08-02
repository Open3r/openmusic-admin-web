import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #f8f9fa;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 500px;
    padding: 1rem;
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 700;
`

export const FileContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const FileLabel = styled.p`
    font-size: 1rem;
    font-weight: 700;
`

export const FileInput = styled.input`
    padding: 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;

    &:focus {
        outline: none;
    }

    &::file-selector-button {
        padding: 0.5rem;
        background-color: #343a40;
        color: white;
        font-size: 1rem;
        font-weight: 700;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #495057;
        }
    }
`

export const URL = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const URLLabel = styled.p`
    font-size: 1rem;
    font-weight: 700;
`

export const URLInput = styled.input`
    padding: 0.5rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
`

export const BannerCreateButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #343a40;
    color: white;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #495057;
    }
`