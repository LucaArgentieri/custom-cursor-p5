import { customCursor } from './customCursor'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <span custom-cursor-area style="pointer-events: none; position:fixed; left:0; top:0; width: 100vw; height:100vh; z-index: 9999;"></span>

  <div style="display:flex; justify-content:center; align-items:center; height:100vh;">
    <h1>Custom Cursor!</h1>
  </div>
`

customCursor({
  fill: false,
  fillColor: "yellow",
  cursor: true,
  size: {
    width: 15,
    height: 15
  },
  ease: false,
  easeValue: 0.06,
  background: false,
  colorAtClick: false,
  stroke: true,
  strokeWeight: 10
})