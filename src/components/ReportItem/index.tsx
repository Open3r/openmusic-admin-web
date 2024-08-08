import {IReport} from "../../interfaces/Report.ts";
import {
    Container,
    ReportApproveButton,
    ReportButtons,
    ReportCreatedAt,
    ReportDescription,
    ReportRejectButton,
    ReportTitle
} from "./style.ts";
import axios from "axios";

interface ReportItemProps {
    report: IReport,
    type: "pending" | "approved" | "rejected"
}

const ReportItem = ({report, type}: ReportItemProps) => {
    const approveReport = async () => {
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/admin/reports/${report.id}/approve`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            alert("신고를 승인했습니다.");

            window.location.reload();
        } catch (e) {
            alert("신고 승인에 실패했습니다.");
        }
    }

    const rejectReport = async () => {
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/admin/reports/${report.id}/reject`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            alert("신고를 거부했습니다.");
            window.location.reload();
        } catch (e) {
            alert("신고 거부에 실패했습니다.");
        }
    }

    return (
        <Container>
            <ReportTitle>{report.title}</ReportTitle>
            <ReportDescription>{report.description}</ReportDescription>

            <ReportCreatedAt>{report.createdAt}</ReportCreatedAt>

            {type === "pending" &&
                <ReportButtons>
                    <ReportApproveButton onClick={approveReport}>승인</ReportApproveButton>
                    <ReportRejectButton onClick={rejectReport}>거부</ReportRejectButton>
                </ReportButtons>
            }
        </Container>
    );
};

export default ReportItem;