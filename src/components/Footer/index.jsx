import React, { useEffect, useRef, useState } from 'react'
import SectionHeader from '../SectionHeader'
import './style.scss'
import gsap from 'gsap'
import SplitText from '../../utils/Split3.min.js'
import useOnScreen from '../../hooks/useOnScreen'
import cn from 'classnames'
 


const Footer = () => {

  const ref = useRef();
  const[reveal, setReveal] = useState(false)

  const onScreen = useOnScreen(ref)

  useEffect(() => {
    if(onScreen) setReveal(onScreen)
  

  }, [onScreen])
  
  useEffect(() => {
    if (reveal){

      const split = new SplitText("#location-text",{
        type: 'lines',
        linesClass:'lineChildren',
      })
      
      const splitParent = new SplitText("#location-text",{
        type: 'lines',
        linesClass:'lineParent',
      })
      
      gsap.fromTo(split.lines,{y:200}, {
        duration:1,
        y:0,
        opacity:1,
        stagger:0.1,
        ease:"power2"
      })
      
    }
  }, [reveal])
  return (
    <section className='footer' data-scroll-section>

      <SectionHeader title= 'Made in' />
      <h1 ref={ref} className={cn('location', {'is-reveal':reveal})} id="location-text">
        Rio de Janerio
      </h1>
    </section>
  )
}

export default Footer