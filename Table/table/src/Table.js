import React from 'react'
import './Table.css'

const table = (props) => {
  const { val1 } = props
  // console.log(typeof val1)
  const salom = () => {
    alert('salom')
  }
  return (
    <tr>
      <th onClick={salom}>{val1.numb}</th>
      <th>{val1.numb2}</th>
      <th>{val1.numb3}</th>
      <th>{val1.numb4}</th>
      <th>{val1.numb5}</th>
      <th>{val1.numb6}</th>
      <th>{val1.numb7}</th>
      <th>{val1.numb8}</th>
      <th>{val1.numb9}</th>
      <th>{val1.numb10}</th>
    </tr>
  )
}

export default table
