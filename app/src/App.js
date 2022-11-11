import { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from "./components/Accordion";
import axios from "axios";
import GetHeader from "./components/Header";
import GetFooter from "./components/Footer";
import GetBody from "./components/Body";

function App() {
  //const [menuItems, setMenuItems] = useState;
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://8000-anansi86-backendbistro-ij0k539ittt.ws-us75.gitpod.io/bistro/"
      );
      setData(response.data);
     // console.log(response)
    }
    getData();
  }, []);

  const myAccordion = data.map((item) => <Accordion item={item} />);

  return (
    <div className="container">
      <GetHeader />
      <div className="container">
        <GetBody />
        <h1> {myAccordion} </h1>
        <div className="container">
          <GetFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
