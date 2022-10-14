import { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from './components/Accordion';
import axios from 'axios';

function App() {
   
    //const [menuItems, setMenuItems] = useState;
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
          const response = await axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/');
          setData(response.data);
        }
        getData();
      }, []);
        console.log(data)

    const myAccordion = data.map(item => <Accordion  item={item} />);
  
       return <h1> {myAccordion} </h1>;
    
    }
    
    export default App


