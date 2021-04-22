import React from 'react'
import Table from './Table'

const Array = () => {
  const rowCount = 100
  const son = []
  let n2 = 0
  for (let i = 0; i <= rowCount; i++) {
    n2 = i + 1
    son.push(n2)
  }
  const son2 = []
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j <= 90; j += 10) {
      const n1 = {
        id: i++,
        numb: son[j],
        numb2: son[j + 1],
        numb3: son[j + 2],
        numb4: son[j + 3],
        numb5: son[j + 4],
        numb6: son[j + 5],
        numb7: son[j + 6],
        numb8: son[j + 7],
        numb9: son[j + 8],
        numb10: son[j + 9],
      }

      son2.push(n1)
    }
  }
  // console.log(son2)
  return (
    <div>
      <table border={1} className='table'>
        <tbody>
          {son2.map((value) => {
            return <Table val1={value} key={value.id} />
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Array
