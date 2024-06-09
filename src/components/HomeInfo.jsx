import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

// this is dynamic and changes from stage to stage
const InfoBox = ({ text, link, btnText}) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-red py-4 px-8 text-white mx-5'>
            i'm <span className='font-semibold'>john</span>
            <br></br>
            welcome to my WRLD
            <br/>
            where dreams turn into reality~
        </h1>
    ),
    2: (
       <InfoBox 
        text="something that leads to the about me page about myself, maybe a small bio"
        link="/about"
        btnText="my journey"
       />
    ),
    3: (
        <InfoBox 
            text="i am a creative individual who is always in their own dreamscape"
            link="/projects"
            btnText="view portfolio"
       />
       
    ),
    4: (
        <InfoBox 
            text="a long paragraph of why they should reach out to me"
            link="/contact"
            btnText="let's connect"
       />
    ),
}

const HomeInfo = ({currentStage}) => {
  // return renderContent[currentStage] || null;
  return null;
}

export default HomeInfo