import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transactions/Transactions';


import user from '../Data/User.json';
import statisticalData from '../Data/statistical-data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';


const App = () => {
    return (
        <>
        <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />

  <Statistics title="Upload stats" stats={statisticalData} />

  <FriendList friends={friends} />

  <TransactionHistory items={transactions} />
  </>
    )
}

export default App