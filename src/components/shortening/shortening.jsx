import React from 'react';
import CardComponent from './../common/button/card/card';
import axios from 'axios';

import { wrapper, shortener, linksDiv ,cardDiv, cardTitle, cardContent, cardImg } from './shortening.module.scss';


const apiEndpoint = "https://api.shrtco.de/v2/shorten?url=";


const ShorteningSection = () => {

    const cards = [
        {   
            "id": 1,
            "title": "Brand Recognition",
            "content": "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        },
        {   
            "id": 2,
            "title": "Detailed Records",
            "content": "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        },
        {   
            "id": 3,
            "title": "Fully Customaizable",
            "content": "Improve brand awareness and content through discoverability through customizable links, supercharging audience engagement."
        }
    ]
    // Getting the value of the input text
    const [value, setValue] = React.useState('');
    // Getting the object from request and setting it. 
    const [links, setLinks] = React.useState([]);   

    //rendering the links 
    const [hasValue, setHasValue] = React.useState(false);
    
    const handleChange = e => {
        setValue(e.target.value);
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();

        // getting the response from the API 
        const response = await axios.get(apiEndpoint + value);
        const data = response.data.result;
        console.log(data);
        setLinks(data);

        setValue('');
        setHasValue(true);
       
    }

    

    return ( 
        <div className={wrapper}>
            <div className={shortener}>
                <form>
                    <input type="text" placeholder="Shorten a link here..." value={value} onChange={handleChange} />
                    <button onClick={handleSubmit} type="submit">Shorten It!</button>
                </form>
            </div>

            <div>
             
                    <div className= { hasValue === true ? linksDiv : null }>
                        <p style={{ color: "#999999"}}> {links.original_link} </p>
                        <p style={{ color: "hsl(180, 66%, 49%)"}}> {links.full_short_link} </p>
                     </div>
         
            </div>
                       

            <div>
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          </div>
          <div className={cardDiv}>
                {cards.map((card, index) => (
                        <CardComponent key={index}>
                            <div className={cardImg}>
                                <img src={require(`../../assets/icons/icon-${card.id}.svg`).default} alt="why" />
                            </div>
                            <div className={cardTitle}>
                                {card.title}
                            </div>
                            <div className={cardContent}>
                                {card.content}
                            </div>
                        </CardComponent>   
                ))}
            
          </div>
                      
        </div>
     );
}
 
export default ShorteningSection;