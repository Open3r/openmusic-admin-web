import {useEffect, useState} from "react";
import {
  Container,
  EmailInput,
  EmailLabel,
  EmailWrapper,
  LoginButton,
  LoginTitle,
  LoginWrapper,
  PasswordInput,
  PasswordLabel,
  PasswordWrapper,
} from "./style";
import axios, {AxiosError} from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    }, []);

    const login = async () => {
        if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
            alert("이메일 형식이 올바르지 않습니다.");
            return;
        }

        if (
            !password.match(
                /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#.~_-])[A-Za-z\d@$!%*?&#.~_-]{8,20}$/
            )
        ) {
            alert(
                "비밀번호는 8자 이상이며 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자가 들어가야 합니다."
            );
            return;
        }

        try {
            const {
                data: {data},
            } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
                email,
                password,
            });

            if (data.accessToken) {
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshToken);

                navigate("/");
            } else {
                alert("로그인 실패");
            }
        } catch (e) {
            if (axios.isAxiosError(e)) {
                const error = e as AxiosError;
                const response = error.response;

                if (response == null) {
                    alert("서버와의 연결이 끊겼습니다.");
                    return;
                }
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            login();
        }
    }

    return (
        <Container>
            <LoginWrapper onKeyDown={handleKeyDown}>
                <LoginTitle>로그인</LoginTitle>
                <EmailWrapper>
                    <EmailLabel>이메일</EmailLabel>
                    <EmailInput
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </EmailWrapper>
                <PasswordWrapper>
                    <PasswordLabel>비밀번호</PasswordLabel>
                    <PasswordInput
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </PasswordWrapper>
                <LoginButton onClick={login}>Login</LoginButton>
            </LoginWrapper>
        </Container>
    );
};

export default Login;
