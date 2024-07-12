import Friend from './Friend';
export default function FriendsList({friends, onSelection, selectFriend}) {
  return (
    <ul>
      {friends.map (friend => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectFriend={selectFriend}
        />
      ))}
    </ul>
  );
}
