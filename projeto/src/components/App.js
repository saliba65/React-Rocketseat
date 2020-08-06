import React from 'react'

import Post from './Post'


export default class App extends React.Component {
  render(){
  return (
    <div>
      <h1>Hello World </h1>
      <Post title='React JS na Rocketseat' />
      <Post title='Nova tecnologia !'/>
      <Post title='Desenvolvimento Web' />

      </div>  
  )
  }
}

