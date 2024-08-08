import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    flex-direction: column;
    border: 1px solid #e0e0e0;
`;

export const ReportTitle = styled.div`
    font-size: 16px;
    margin-left: 10px;
`;

export const ReportDescription = styled.div`
    font-size: 14px;
    margin-left: 10px;
`;

export const ReportCreatedAt = styled.div`
    font-size: 12px;
    margin-left: 10px;
`;

export const ReportButtons = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const ReportApproveButton = styled.button`
    margin-left: auto;
    padding: 5px 10px;
    border: none;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
`;

export const ReportRejectButton = styled.button`
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    background-color: #f44336;
    color: white;
    cursor: pointer;
`;