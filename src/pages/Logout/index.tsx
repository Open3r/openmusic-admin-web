import {Spin} from "antd";
import {Container, LogoutText} from "./style.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Logout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            logout();
        }, 3000)
    }, []);

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        navigate("/login");
    }

    return (
        <Container>
            <Spin tip="로그아웃 중..." size="large">
                <LogoutText/>
            </Spin>
        </Container>
    );
};

export default Logout;