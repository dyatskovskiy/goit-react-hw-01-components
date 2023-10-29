import { Friend, StatusIndicator, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <StatusIndicator $isOnline={isOnline}></StatusIndicator>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Friend>
  );
};
