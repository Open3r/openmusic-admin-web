import {Container, ReportWrapper, Title, Loading} from "./style.ts";
import {IReport} from "../../interfaces/Report.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import ReportItem from "../../components/ReportItem";
import {Spin} from "antd";

const ApprovedReportList = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [approvedReports, setApprovedReports] = useState<IReport[]>([]);

    useEffect(() => {
        fetchApprovedReports();
    }, []);

    const fetchApprovedReports = async () => {
        setLoading(true);

        try {
            const {
                data: {data},
            } = await axios.get(`${import.meta.env.VITE_API_URL}/admin/reports/approved`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            setApprovedReports(data);
        } catch (e) {
            alert("신고를 불러오는데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <Title>승인 된 신고</Title>

            {loading ? <Spin tip="로딩 중..." size="large"><Loading /></Spin> :
            approvedReports.length === 0 ? (
                <p>신고가 없습니다.</p>
            ) : (
                <ReportWrapper>
                    {approvedReports.map((report, i) => (
                        <ReportItem key={i} report={report} type="approved"/>
                    ))}
                </ReportWrapper>
            )
            }
        </Container>
    );
};

export default ApprovedReportList;