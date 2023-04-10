import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './header';
import Banner from './banner';
import About from './about';
import Skills from './skills';
import Featured from './featured';
import Work from './work';
import Contact from './contact';
import Footer from './footer';


const container = document.getElementById('app-root')!
const root = createRoot(container)

root.render(
    <div>
        <Header />
        <Banner />
        <About />
        <Skills />
        <Featured />
        {/* <Work /> */}
        <Contact />
        <Footer />
    </div>
)
