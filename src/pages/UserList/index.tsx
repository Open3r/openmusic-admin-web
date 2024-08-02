import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/User";
import axios from "axios";
import UserItem from "../../components/UserItem";
import { Container, Line, UserWrapper } from "./style";
import DeletedUserItem from "../../components/DeletedUserItem";

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [deletedUsers, setDeletedUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchDeletedUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(`${import.meta.env.VITE_API_URL}/admin/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      setUsers(data);
    } catch (e) {
      alert("유저를 불러오는데 실패했습니다.");
    }
  };

  const fetchDeletedUsers = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(
        `${import.meta.env.VITE_API_URL}/admin/users/deleted`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      setDeletedUsers(data);
    } catch (e) {
      alert("삭제된 유저를 불러오는데 실패했습니다.");
    }
  };

  return (
    <Container>
      {users.length === 0 ? (
        <div>유저가 없습니다.</div>
      ) : (
        <UserWrapper>
          {users.map((user, i) => (
            <UserItem key={i} user={user} />
          ))}
        </UserWrapper>
      )}

      <Line />

      {deletedUsers.length === 0 ? (
        <div>삭제된 유저가 없습니다.</div>
      ) : (
        <UserWrapper>
          {deletedUsers.map((user, i) => (
            <DeletedUserItem key={i} user={user} />
          ))}
        </UserWrapper>
      )}
    </Container>
  );
};

export default UserList;
