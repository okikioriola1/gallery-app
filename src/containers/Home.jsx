import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Featured from '../components/Featured'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import About from '../components/About'
import CustomCursor from '../CustomCursor'
import '../styles/home.scss'
import { useRef } from 'react'
import { useEffect } from 'react'
import useLocoScroll from '../hooks/useLocoScroll'
const Home = () => {
    const [preloader, setPreloader] = useState(true)
    useLocoScroll(!preloader)
    const [timer, setTimer] = useState(4)

    const id = useRef(null);
    const clear =()=>{
        window.clearInterval(id.current);
        setPreloader(false)
    }
    useEffect(()=>{
        id.current = window.setInterval(()=>{
            setTimer((timer)=>timer-1)
        }, 1000)

    },[])

    useEffect(()=>{

        if(timer=== 0){
            clear()
        }

    },[timer])
  return (
    <>
    <CustomCursor/>
    {preloader? (
        <div className='loader-wrapper absolute'>
            <h1>Kiks stores</h1>
            <h2>Home of awesomeness</h2>
        </div>
    ): (

        <div className='main-container' id="main-container"
        data-scroll-container
        
        >

        <Navbar />
        <Header/>
        <Featured />
        <About />
        <Gallery />
        <Footer />
        
        
        
        </div>
        )}
    
    </>

  )
}

export default Home