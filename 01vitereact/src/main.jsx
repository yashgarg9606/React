import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <>
    <h1> Custom App! |  By Yash garg</h1>
    </>
  )
}

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit Google'
)
createRoot(document.getElementById('root')).render(
    
    <App />
    // reactElement
)
