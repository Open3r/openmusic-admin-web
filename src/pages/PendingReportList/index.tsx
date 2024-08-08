import {Container, Loading, ReportWrapper, Title} from "./style.ts";
import {IReport} from "../../interfaces/Report.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import ReportItem from "../../components/ReportItem";
import {Spin} from "antd";

const PendingReportList = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [pendingReports, setPendingReports] = useState<IReport[]>([]);

    useEffect(() => {
        fetchPendingReports();
    }, []);

    const fetchPendingReports = async () => {
        setLoading(true)

        try {
            const {
                data: {data},
            } = await axios.get(`${import.meta.env.VITE_API_URL}/admin/reports/pending`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            setPendingReports(data);
        } catch (e) {
            alert("신고를 불러오는데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <Title>대기 중인 신고</Title>

            {loading ? <Spin tip="로딩 중..." size="large"><Loading /></Spin> :
                pendingReports.length === 0 ? (
                    <p>신고가 없습니다.</p>
                ) : (
                    <ReportWrapper>
                        {pendingReports.map((report, i) => (
                            <ReportItem key={i} report={report} type="pending"/>
                        ))}
                    </ReportWrapper>
                )
            }
        </Container>
    );
};

export default PendingReportList;