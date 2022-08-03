import './style.css'
import { customCursor } from 'custom-cursor-p5'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <span custom-cursor-area style="pointer-events: none; position:fixed; left:0; top:0; width: 100vw; height:100vh; z-index: 9999;"></span>

  
  <div style="display:flex; justify-content:center; align-items:center; height:100vh;">
    <h1>Custom Cursor!</h1>
  </div>
`

customCursor({
  shape: 'ellipse',
  cursor: false,
  size: {
    width: 15,
    height: 15
  },
  ease: true,
  easeValue: 0.06,
  background: false,
  colorAtClick: true,
  clickedColor: 'white',
  strokeColor: 'white',
  strokeClickedColor: 'black',
  stroke: true,
  strokeWeight: 1
})