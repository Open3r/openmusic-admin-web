import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    font-family: 'Pretendard', sans-serif;
    gap: 1rem;
`;

export const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

export const ReportWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const Loading = styled.div`
    padding: 50px;
`