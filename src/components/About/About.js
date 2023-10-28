import React, { useContext} from 'react'
import Loader from '../Loader/Loader';
import {Context} from "../../context/Context";



const About = () => {
   const {about, isAboutLoading} =  useContext(Context)
    if(isAboutLoading) {
        return <Loader/>
    }
    const {aboutTitle, aboutDescription, aboutImage} = about;
    /*to get patahraphs with p formatting we need to install packages marked,dompurify*/
  return (
    <div>
        <section className="about" id="about">
            <div className = "row">
                <div className="column">
                    <h2 className = "titleText">
                        {aboutTitle}
                    </h2>
                    <div dangerouslySetInnerHTML={{__html:aboutDescription}}/>
                </div>
                <div className="column">
                    <div className = "imgWrap">
                        <img src={aboutImage} alt={aboutTitle}/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About