import React, {useState, useEffect, useCallback} from 'react'
import {client} from './client'
import { cleanUpAbout, cleanUpCarouselSlides } from './helpers';

export const Context = React.createContext()

//provider component, providr is goign to wrap component. provider can pass on data saved inside the context to any  components wrapped by provider
export const Provider = (props) => {
    const [about, setAbout] = useState({});
    const [isAboutLoading, setIsAboutLoading] = useState(false);
    const [isCarouselLoading, setIsCarouselLoading] = useState(false);
    const [carouselSlides, setCarouselSlides] = useState([]);

    const saveAboutData = useCallback((rawData) => {
        const cleanAboutData = cleanUpAbout(rawData)
        setAbout(cleanAboutData)
    }, [])

const getAbout = useCallback(async () => {
    setIsAboutLoading(true);
    try {
        //getEntry vs getEntries single entry vs multiple entries
        //entry id is used in getEntry or getEntries
        const response = await client.getEntry('4PuRGe7n7Io0pGrBHLDxyD');
        console.log(response);
        setIsAboutLoading(false);
        if(response) {
            console.log(response);
            saveAboutData(response);

        } else {

        }
    } catch(error) {
        console.log(error);
        setIsAboutLoading(false);
    }
}, [saveAboutData])


useEffect(()=> {
    getAbout();
}, [getAbout]);

const saveCarouselData = useCallback(
    (rawData) => {
        const cleanCarouselData = cleanUpCarouselSlides(rawData);
        setCarouselSlides(cleanCarouselData);
    }, [])

const getCarouselSlides = useCallback(async () => {
    setIsCarouselLoading(true);
    try {
      const response = await client.getEntries({content_type : 'kitchenCarousel'});
      const responseData =  response.items
      console.log(responseData);
      if(responseData) {
        saveCarouselData(responseData)
      } else {
        setCarouselSlides([])
      }
      setIsCarouselLoading(false);
    }
    catch(error) {
      console.log(error)
      setIsCarouselLoading(false)
    }
  }, [saveCarouselData])


  useEffect(() => {
    getCarouselSlides()
  }, [ getCarouselSlides])

    const contextData = {
       about,
       isAboutLoading,
       isCarouselLoading,
       carouselSlides
    }
    return (
        <Context.Provider value = {contextData} >
            {props.children}
        </Context.Provider>
    )
}