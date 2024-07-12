import Button from './Button';
import {useState} from 'react';
export default function FormSplitBill({selectedFriend, onSplitBill}) {
  const [bill, setBill] = useState ('');
  const [userExpense, setUserExpense] = useState ('');
  const friendExpense = bill ? bill - userExpense : '';
  const [whoIsPaying, setWhoIsPaying] = useState ('user');
  function handleSubmit (e) {
    e.preventDefault ();
    if (!bill || !userExpense) return;
    onSplitBill (whoIsPaying === 'user' ? friendExpense : -userExpense);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the bill with {selectedFriend.name}</h2>
      <label>🌄 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={e => setBill (e.target.value)}
      />

      <label>☝️Your expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={e =>
          setUserExpense (
            // If the user enters a value greater than the bill it will not allow it
            Number (e.target.value) > bill
              ? userExpense
              : Number (e.target.value)
          )}
      />

      <label> 💰{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={e => setWhoIsPaying (e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
