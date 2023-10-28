import {marked} from 'marked';
import DOMPurify from 'dompurify';

export const getHTMLData = (rawData) => {
    const htmlString = marked(rawData);
    //dom purifier must be used as dangareouslysethtml is not secure: cross site scripting attacks*/
    const sanitazedHTMLString =  DOMPurify.sanitize(htmlString);

    return sanitazedHTMLString;
}

//cleanup data returned from contentful
export const cleanUpAbout = (rawData) => {
    const {sys, fields} = rawData
    const {id} = sys
    const aboutTitle = fields.title
    const aboutDescription = getHTMLData(fields.description);
    //image
    const aboutImage = fields.image.fields.file.url
   
    const cleanAbout = {id, aboutTitle, aboutDescription, aboutImage}

    return cleanAbout

}

export const cleanUpCarouselSlides = (rawData) => {
    const cleanSlides = rawData.map((slide) => {
        const {sys, fields} = slide
        const {id} = sys
        const slideTitle = fields.title
        const slideDescription = fields.description
        //image
        const slideBg = fields.image.fields.file.url
       
        const updatedSlide = {id, slideTitle, slideDescription, slideBg}
        return updatedSlide
    })

    return cleanSlides; 

  }