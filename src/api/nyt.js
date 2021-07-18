import axios from 'axios';

const NYT_API = process.env.REACT_APP_NYT_API;

const fetchNytData = async () => {
  try {
    const { data: { results } } = await axios.get(NYT_API);

    const nytData = results.map(({ title, abstract, des_facet, media, published_date, url, byline }) => {
      if (media.length > 0) {
        const obj = {
          title, 
          abstract,
          des_facet,
          media,
          published_date, 
          url,
          byline
        }
        return obj;
      }
    });
    
    const modifiedNytData = nytData.filter((item) => { return item !== undefined });
    
    // Function used to filter for covid data
    const nytCovidData = (arr, str) => {
      return arr.filter(obj => Object.keys(obj).some(key => obj[key].includes(str)));
    };
    
    return nytCovidData(modifiedNytData, 'Coronavirus (2019-nCoV)');
  } catch (error) {
    console.log(error);
  }
};

export default fetchNytData;