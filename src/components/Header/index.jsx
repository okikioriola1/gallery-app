import React, { useEffect } from 'react'

import './style.scss'
import gsap from 'gsap'
import SplitText from '../../utils/Split3.min.js'

const Header = () => {
  useEffect(() => {
    const split = new SplitText("#header-text",{
      type: 'lines',
      linesClass:'lineChildren',
    })

    const splitParent = new SplitText("#header-text",{
      type: 'lines',
      linesClass:'lineParent',
    })

    gsap.to(split.lines, {
      duration:1,
      y:0,
      opacity:1,
      stagger:0.1,
      ease:"power2"
    })

  }, [])
  
  return (
    <section className='header-container' data-scroll-section>
      <ul className='header-menu'>
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
    <h1 id="header-text">Hotness Redefined</h1>
    </section>
  )
}

export default Header