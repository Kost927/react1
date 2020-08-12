import React from 'react'
import styles from './FriendList.module.css'

const FriendList = ({friends}) => {
    return (
    <ul className={styles.friendList}>
 {friends.map(friend => (
<li className={styles.item} key={friend.id}>
 <span className={friend.isOnline === true ? styles.isOnline : styles.isOfline}></span>
  <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
 <p className={styles.name}>{friend.name}</p>
</li>
   
    ))}
</ul>
    )
}

export default FriendList