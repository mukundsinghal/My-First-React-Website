import React from 'react'
import home from '../../src/images/home.jpg'
import Common from './Common'

const Home = () => {
    return (
        <>
       <Common name="Grow your business with" imgsrc={home} visit="/service"
               btnname="Get Started" />
        </>
    )
}

export default Home