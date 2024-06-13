import { useState } from "react";

import { EditOutlined } from "@ant-design/icons";
import { Avatar, List, Modal } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { StateSchema } from "@/app/providers/StoreProvider";

import { useCreateChatMutation } from "@/entities/Chat/api/createChat";
import { getUserAuthData } from "@/entities/User";
import { useLazyGetAllUsersQuery } from "@/entities/User/api/getUsers";

import styles from "./CreateChat.module.scss";

export const CreateChat = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getAllUsers, result] = useLazyGetAllUsersQuery();
  const [createChat, { data }] = useCreateChatMutation();
  const navigate = useNavigate();

  const user = useSelector(getUserAuthData);
  const chats = useSelector((state: StateSchema) => state.chats.chats);

  const checkIfChatAlreadyExist = (companionId: string) => {
    const existingChat = chats.find((chat) =>
      chat.members.includes(companionId)
    );

    return Boolean(existingChat);
  };

  const handleOpenCreateModal = async () => {
    setIsModalOpen(true);
    getAllUsers();
  };

  const handleCreateChat = async (companionId: string) => {
    try {
      if (checkIfChatAlreadyExist(companionId)) {
        setIsModalOpen(false);

        navigate(`/chat/${companionId}`);
      } else {
        await createChat({
          firstId: user!._id,
          secondId: companionId,
        });

        setIsModalOpen(false);

        navigate(`/chat/${companionId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={styles.createChat} onClick={handleOpenCreateModal}>
        <div>
          <Avatar className={styles.createIcon} icon={<EditOutlined />} />
        </div>
        <span className={styles.createChatLabel}>Создать чат</span>
      </button>
      <Modal
        title="Создать чат"
        cancelText={undefined}
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>Выберите с кем хотите начать диалог</p>
        {result.isLoading && "Loading..."}
        {result.error && "Ошибка во время загрузки пользователей"}
        <List
          itemLayout="horizontal"
          style={{
            overflowY: "scroll",
            height: "300px",
            cursor: "pointer",
          }}
          dataSource={result.data}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => handleCreateChat(item._id)}
              className={styles.listItem}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={item.name}
                description={item.surname}
              />
            </List.Item>
          )}
        ></List>
      </Modal>
    </>
  );
};
