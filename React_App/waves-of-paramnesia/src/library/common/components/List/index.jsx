import React from 'react'
import ListItem from './ListItem'
import './styles.scss';



export default function List({list = [], label}) {
    return (
      <React.Fragment>
        <p className="list-header">{label}</p>
        <ul>
          {list.map((item, index) => <ListItem key={index.toString()} item={item} />)}
        </ul>
      </React.Fragment>
    )
}
