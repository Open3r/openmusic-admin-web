import axios from "axios";
import { IBanner } from "../../interfaces/Banner";
import { BannerImage, Container, DeleteButton } from "./style";

interface BannerProps {
  banner: IBanner;
}

const BannerItem = ({ banner }: BannerProps) => {
  const handleDelete = async () => {
    const confirm = window.confirm("정말 삭제하시겠습니까?");

    if (!confirm) {
      return;
    }

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/admin/banners/${banner.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      window.location.reload();
    } catch (e) {
      console.error(e);
      alert("배너 삭제에 실패했습니다.");
    }
  };

  return (
    <Container>
      <BannerImage src={banner.imageUrl} alt="Banner" />
      <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
    </Container>
  );
};

export default BannerItem;
