import {Container, Logo, LogoImage, LogoText, Nav, NavItem, ReportDropdown, ReportNavText} from "./style";
import {Space} from "antd";
import {BellOutlined, CheckOutlined, DisconnectOutlined, DownOutlined} from "@ant-design/icons";

const Header = () => {
    return (
        <Container>
            <Logo to="/">
                <LogoImage src="/logo.png" alt="logo"/>
                <LogoText>OpenMusic Admin</LogoText>
            </Logo>

            <Nav>
                <NavItem to="/banners">배너</NavItem>
                <NavItem to="/playlists">플레이리스트</NavItem>
                <NavItem to="/songs">노래</NavItem>
                <NavItem to="/albums">앨범</NavItem>
                <NavItem to="/users">유저</NavItem>
                <ReportDropdown menu={{
                    items: [
                        {
                            label: <NavItem to="/reports/pending">대기 중</NavItem>,
                            key: "pending",
                            icon: <BellOutlined/>
                        },
                        {
                            type: "divider"
                        },
                        {
                            label: <NavItem to="/reports/approved">승인됨</NavItem>,
                            key: "approved",
                            icon: <CheckOutlined/>
                        },
                        {
                            label: <NavItem to="/reports/rejected">거부됨</NavItem>,
                            key: "rejected",
                            icon: <DisconnectOutlined/>,
                            danger: true
                        }
                    ]
                }}>
                    <Space>
                        <ReportNavText>신고</ReportNavText>
                        <DownOutlined/>
                    </Space>
                </ReportDropdown>
                <NavItem to="/logout">로그아웃</NavItem>
            </Nav>
        </Container>
    );
};

export default Header;
