import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Recognised from '../components/Recognised'
import Benefits from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import Achievements from '../components/Achievements'

function Home() {
    return (
        <div>
            <Hero />
            <Recognised />
            <Features />
            <Benefits />
            <Testimonials />
            <Achievements />
        </div>
    )
}

export default Home
