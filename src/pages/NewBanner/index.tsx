import { useState } from "react";
import {
  BannerCreateButton,
  Container,
  FileContainer,
  FileInput,
  FileLabel,
  Title,
  URL,
  URLInput,
  URLLabel,
  Wrapper,
} from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBanner = () => {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const file = (target.files as FileList)[0];

    if (file === undefined) {
      return;
    }

    const EXTENSIONS = ["jpg", "jpeg", "png", "gif"];

    if (!EXTENSIONS.includes(getExtension(file.name))) {
      alert("지원하지 않는 파일 형식입니다.");
      return;
    }

    // 50MB
    const LIMIT = 50 * 1024 * 1024;

    if (file.size > LIMIT) {
      alert("파일 크기는 50MB를 넘을 수 없습니다.");
      return;
    }

    setFile(file);
  };

  const getExtension = (filename: string) => {
    if (!filename.includes(".")) {
      return "";
    }

    const parts = filename.split(".");
    return parts[parts.length - 1];
  };

  const upload = async () => {
    if (file === null) {
      alert("파일을 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("files", file);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/files/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      const imageUrl = data.data[0].url;

      if (imageUrl === undefined) {
        alert("파일 업로드에 실패했습니다.");
        return;
      }

      await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/banners`,
        {
          imageUrl,
          url,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      alert("배너가 생성되었습니다.");

      navigate("/banners");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>배너 생성</Title>

        <FileContainer>
          <FileLabel>파일</FileLabel>
          <FileInput type="file" onChange={handleChange} accept="image/*" />
        </FileContainer>

        <URL>
          <URLLabel>URL</URLLabel>
          <URLInput
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </URL>

        <BannerCreateButton onClick={upload}>배너 생성</BannerCreateButton>
      </Wrapper>
    </Container>
  );
};

export default NewBanner;
