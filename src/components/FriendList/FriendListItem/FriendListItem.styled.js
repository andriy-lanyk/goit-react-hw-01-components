import styled from "@emotion/styled";

const ItemOfFriends = styled.li`
  display: flex;
  width: 380px;
  height: 90px;
  box-shadow: 0 0 4px 6px #21212126;
  margin-bottom: 20px;
  padding: 10px;
`;

const StatusItem = styled.span`
  width: 20px;
  height: 20px;
  margin: auto 10px;
  border: 1px solid #212121;
  border-radius: 50%;
  background-color: ${(prop) => (prop.status ? "green" : "red")};
`;

const AvatarFriend = styled.img`
  display: block;
  width: 80px;
  height: auto;
  border-radius: 4px;
  margin-right: 30px;
`;

const NameFriend = styled.p`
  margin: auto 0;
  font-size: 36px;
  font-weight: 800;
`;

export { ItemOfFriends, StatusItem, AvatarFriend, NameFriend };
