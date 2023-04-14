import React, {useEffect, useRef} from 'react'
import SectionHeader from '../SectionHeader'
import './style.scss'
import gsap from 'gsap'
import SplitText from '../../utils/Split3.min.js'
import { useState } from 'react'
import cn from 'classnames'
import useOnScreen from '../../hooks/useOnScreen'
const About = () => {
  const ref = useRef();
  const[reveal, setReveal] = useState(false)

  const onScreen = useOnScreen(ref)

  useEffect(() => {
    if(onScreen) setReveal(onScreen)
  

  }, [onScreen])
  

  useEffect(() => {
    if(reveal){

      const split = new SplitText("#headline",{
        type: 'lines',
        linesClass:'lineChildren',
      })
      
      
      
      gsap.to(split.lines, {
        duration:1,
        y:-20,
        opacity:1,
        stagger:0.1,
        ease:"power2"
      })
    }

  }, [reveal])
  return (
    <section className={cn('about-section', {'is-reveal':reveal})}
      data-scroll-section
    >
      <SectionHeader title="about"/>
      <p ref={ref} id="headline" className={cn({'is-reveal':reveal})}>
      Hello and welcome to kikstores, the place to find the best clothes for every taste and occasion. We thoroughly check the quality of our goods, working only with reliable suppliers so that you only receive the best quality product.
  We believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices, and ship them to you regardless of where you are located.

      </p>

    </section>
  )
}

export default About