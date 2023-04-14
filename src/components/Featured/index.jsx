import React from 'react'
import './style.scss'
import photos from '../../data'
import FirstImage from '../../assets/images/image1.jpg'
import SecondImage from '../../assets/images/image2.jpg'

const Featured = () => {
  const [firstUrl, secondUrl] = photos
  return (
    <section className='featured-section'
    data-scroll-section

    >
      <div className='featured-row-layout'>
      <h6>live</h6>
      <img src={FirstImage}  data-scroll/>
      </div>
      

      <div className='featured-column-layout'>
        <h6>imagine</h6>
        <img src={SecondImage}  data-scroll/>
      </div>
  

    </section>
  )
}

export default Featured