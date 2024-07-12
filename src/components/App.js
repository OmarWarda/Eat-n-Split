import {useState} from 'react';
import Button from './Button'
import FriendsList from './FriendList'
import FormAddFriend from './FormAddFriend'
import FormSplitBill from './FormSplitBill';
const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];


export default function App () {
  const [friends, setFriends] = useState (initialFriends);
  const [showAddFriend, setShowAddFriend] = useState (false);
  const [selectFriend, setSelectFriend] = useState (null);

  function handleAddFriend () {
    setShowAddFriend (!showAddFriend);
    setSelectFriend(null)
  }
  function handleAddFriendToList (friend) {
    setFriends (friends => [...friends, friend]);
  }

  function handleSelectFriend (friend) {
    // setSelectFriend (friend);
    setSelectFriend((currentSelectedFriend) => (currentSelectedFriend?.id === friend.id ? null : friend))
    setShowAddFriend(false) // to close the add friend menu
  }

  function handleSplitBill(value){
    setFriends((friends) => 
      friends.map((friend) => 
        friend.id === selectFriend.id 
          ? {...friend , balance: friend.balance + value} 
          : friend))
    setSelectFriend(null)
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelectFriend}
          selectFriend={selectFriend}
        />

        {showAddFriend
          ? <FormAddFriend onAddFriend={handleAddFriendToList} />
          : null}

        <Button onClick={() => handleAddFriend ()}>
          {showAddFriend ? 'Close' : 'Add friend'}
        </Button>
      </div>
      {selectFriend && <FormSplitBill selectedFriend={selectFriend} onSplitBill={handleSplitBill}/>}
    </div>
  );
}








