import React from 'react'
import Header from '../Shared/Header'
import AppointBanner from './AppointBanner/AppointBanner'
import Intro from './Intro/Intro'
import Services from './Services/Services'
import Testimonials from './Testimonials/Testimonials'

const Home = () => {
    return (
        <div>
                <Header />
                <Intro />
                <Services />
                <AppointBanner />
                <Testimonials />
        </div>
    )
}

export default Home
