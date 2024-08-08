import {useEffect, useState} from "react";
import {IBanner} from "../../interfaces/Banner";
import {BannerCreateButton, BannerEmptyTitle, BannerEmptyWrapper, BannerWrapper, Container, Title,} from "./style";
import BannerItem from "../../components/BannerItem";
import axios from "axios";

const BannerList = () => {
    const [banners, setBanners] = useState<IBanner[]>([]);

    useEffect(() => {
        fetchBanners();
    }, []);

    const fetchBanners = async () => {
        try {
            const {
                data: {data},
            } = await axios.get(`${import.meta.env.VITE_API_URL}/banners`);

            setBanners(data);
        } catch (e) {
            alert("배너를 불러오는데 실패했습니다.");
        }
    };

    return (
        <Container>
            <Title>배너</Title>

            {banners.length === 0 ? (
                <BannerEmptyWrapper>
                    <BannerEmptyTitle>배너가 없습니다.</BannerEmptyTitle>
                    <BannerCreateButton to="/banners/new">배너 생성</BannerCreateButton>
                </BannerEmptyWrapper>
            ) : (
                <BannerWrapper>
                    {banners.map((banner, i) => (
                        <BannerItem key={i} banner={banner}/>
                    ))}
                    <BannerCreateButton to="/banners/new">배너 생성</BannerCreateButton>
                </BannerWrapper>
            )}
        </Container>
    );
};

export default BannerList;
