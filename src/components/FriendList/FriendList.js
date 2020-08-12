import React from 'react'
import styles from './FriendList.module.css'
import PropTypes from 'prop-types';

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

FriendList.propTypes = {
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    name: PropTypes.string,
    avatar: PropTypes.string,
  };

export default FriendList