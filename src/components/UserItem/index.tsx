import axios from "axios";
import { IUser } from "../../interfaces/User";
import {
  UserContainer,
  DeleteButton,
  UpdateButton,
  UserAvatar,
  UserCreatedAt,
  UserEmail,
  UserNickname,
  ButtonWrapper,
} from "./style";

interface UserItemProps {
  user: IUser;
}

const UserItem = ({ user }: UserItemProps) => {
  const deleteUser = async () => {
    const confirm = window.confirm("정말 삭제하시겠습니까?");

    if (!confirm) {
      return;
    }

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/admin/users/${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      window.location.reload();
    } catch (e) {
      console.error(e);
      alert("유저 삭제에 실패했습니다.");
    }
  };

  return (
    <UserContainer>
      <UserAvatar src={user.avatarUrl} alt="User Avatar" />
      <UserNickname>{user.nickname}</UserNickname>
      <UserEmail>{user.email}</UserEmail>
      <UserCreatedAt>
        {user.createdAt[0]}년 {user.createdAt[1]}월 {user.createdAt[2]}일{" "}
        {user.createdAt[3]}시 {user.createdAt[4]}분 {user.createdAt[5]}초 생성
      </UserCreatedAt>
      <ButtonWrapper>
        <DeleteButton onClick={deleteUser}>삭제</DeleteButton>
        <UpdateButton>수정</UpdateButton>
      </ButtonWrapper>
    </UserContainer>
  );
};

export default UserItem;
