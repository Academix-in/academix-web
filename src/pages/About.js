import React from 'react'
import AboutHero from '../components/AboutHero'
import Achievements from '../components/Achievements'
import Problems from '../components/Problems'
import Recognised from '../components/Recognised'
import Team from '../components/Team'

function About() {
    return (
        <>
            <AboutHero />
            <Recognised />
            <Problems />
            <Team />
            <Achievements />
        </>
    )
}

export default About
