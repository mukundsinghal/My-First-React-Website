import React from 'react'
import about from '../../src/images/about.jpg'
import Common from './Common'

const About  = () => {
    return (
        <>
       <Common name="Welcome to About page" imgsrc={about} visit="/contact"
               btnname="Contact Now" />
        </>
    )
}

export default About