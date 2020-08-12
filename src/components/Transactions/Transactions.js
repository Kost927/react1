import React from 'react'
import styles from './Transactions.module.css'

const Transactions = ({items}) => {
    return (
<table className={styles.transactionHistory}>
    
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
    ))}
  </tbody>
  
</table>
    )
}

export default Transactions