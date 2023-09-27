// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// BASIC SOLUTION

// const smallBox = <div className="box box--small" style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}>small lightblue box</div>
// const mediumBox = <div className="box box--medium" style={{fontStyle: 'italic', backgroundColor: 'pink'}}>medium pink box</div>
// const largeBox = <div className="box box--large" style={{fontStyle: 'italic', backgroundColor: 'orange'}}>large orange box</div>

// 1. EXTRA CREDIT SOLUTION

// adding a default prop of empty string for the className, so that it doesn't remain undefined if no className is provided
// the position of the ...style props matters, if they came before the defined fontStyle, the user would not be able to override it
// otherProps can be anything else, e.g. an id
// we have just created a styled component

// const Box = ({className = '', style, ...otherProps}) => <div className={`box ${className}`} style={{fontStyle: 'italic', ...style}} {...otherProps}/>

// const smallBox = <Box id="small-box" className="box box--small" style={{backgroundColor: 'lightblue', fontStyle: 'normal'}}>small lightblue box</Box>
// const mediumBox = <Box className="box box--medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
// const largeBox = <Box className="box box--large" style={{backgroundColor: 'orange'}}>large orange box</Box>

// 2. EXTRA CREDIT SOLUTION

const Box = ({size, style, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}` : ''
  return <div className={`box ${sizeClassName}`} style={{fontStyle: 'italic', ...style}} {...otherProps}/>}

const smallBox = <Box size="small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
const largeBox = <Box size="large" style={{backgroundColor: 'orange'}}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
