// import './App.css';
import Profile from './components/Profile/Profile';
import user from './data/user.json';
import Statistics from './components/Statistics/Statistics';
import data from "./data/data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./data/friends.json";
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import items from "./data/transactions.json";

function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={items}/>
    </>
  );
}

export default App;
