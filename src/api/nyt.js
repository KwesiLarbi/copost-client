import { DockSharp } from '@material-ui/icons';
import axios from 'axios';

const NYT_API = process.env.REACT_APP_NYT_API;

const fetchNytData = async () => {
  try {
    const { data: { response: { docs } }} = await axios.get(NYT_API);

    console.log(docs);

    const nytData = docs.map(({ headline: { main }, abstract, multimedia: { default: { url } }, pub_date, web_url, byline }) => {
      if (url.length > 0) {
        const obj = {
          main, // p
          abstract, // p
          media: url, // p
          pub_date, // p
          web_url, // p
          byline // p
        }
        return obj;
      }
    });
    
    // const modifiedNytData = nytData.filter((item) => { return item !== undefined });
    
    // // Function used to filter for covid data
    // const nytCovidData = (arr, str) => {
    //   return arr.filter(obj => Object.keys(obj).some(key => obj[key].includes(str)));
    // };
    
    // return nytCovidData(modifiedNytData, 'Coronavirus (2019-nCoV)');

    return nytData;
  } catch (error) {
    console.log(error);
  }
};

export default fetchNytData;