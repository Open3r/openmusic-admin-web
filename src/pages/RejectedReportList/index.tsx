import {Container, Loading, ReportWrapper, Title} from "./style.ts";
import {IReport} from "../../interfaces/Report.ts";
import {useEffect, useState} from "react";
import axios from "axios";
import ReportItem from "../../components/ReportItem";
import {Spin} from "antd";

const RejectedReportList = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [rejectedReports, setRejectedReports] = useState<IReport[]>([]);

    useEffect(() => {
        fetchRejectedReports();
    }, []);

    const fetchRejectedReports = async () => {
        setLoading(true);

        try {
            const {
                data: {data},
            } = await axios.get(`${import.meta.env.VITE_API_URL}/admin/reports/rejected`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });

            setRejectedReports(data);
        } catch (e) {
            alert("신고를 불러오는데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <Title>거부 된 신고</Title>

            {loading ? <Spin tip="로딩 중..." size="large"><Loading/></Spin> :
                rejectedReports.length === 0 ? (
                    <p>신고가 없습니다.</p>
                ) : (
                    <ReportWrapper>
                        {rejectedReports.map((report, i) => (
                            <ReportItem key={i} report={report} type="approved"/>
                        ))}
                    </ReportWrapper>
                )}
        </Container>
    );
};

export default RejectedReportList;