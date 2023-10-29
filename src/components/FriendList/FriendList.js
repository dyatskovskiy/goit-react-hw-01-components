import { List } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </List>
  );
};
