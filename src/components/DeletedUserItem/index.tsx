import axios from "axios";
import {IUser} from "../../interfaces/User";
import {
    ButtonWrapper,
    RestoreButton,
    UserAvatar,
    UserContainer,
    UserCreatedAt,
    UserEmail,
    UserNickname,
} from "./style";

interface UserItemProps {
    user: IUser;
}

const DeletedUserItem = ({user}: UserItemProps) => {
    const restoreUser = async () => {
        const confirm = window.confirm("정말 복구하시겠습니까?");

        if (!confirm) {
            return;
        }

        try {
            await axios.patch(
                `${import.meta.env.VITE_API_URL}/admin/users/${user.id}/restore`, {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                }
            );
            window.location.reload();
        } catch (e) {
            console.error(e);
            alert("유저 복구에 실패했습니다.");
        }
    };

    return (
        <UserContainer>
            <UserAvatar src={user.avatarUrl} alt="User Avatar"/>
            <UserNickname>{user.nickname}</UserNickname>
            <UserEmail>{user.email}</UserEmail>
            <UserCreatedAt>{user.createdAt}</UserCreatedAt>
            <ButtonWrapper>
                <RestoreButton onClick={restoreUser}>복구</RestoreButton>
            </ButtonWrapper>
        </UserContainer>
    );
};

export default DeletedUserItem;
