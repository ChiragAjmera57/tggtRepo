import { useEffect, useState } from "react";
import "./App.css";
import Box from "./components/Box";
import { Input, Spinner } from "@chakra-ui/react";

function App() {
  const [data, setdata] = useState(null);
  const [query, setquery] = useState("");
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  let url = `https://api.punkapi.com/v2/beers`
  const fetchData = async () => {
    if(query.length>0){
      url = url+`?beer_name=${query}`
    }
    try {
      await setloading(true)
      const response = await fetch(url);
      const beers = await response.json();
      setloading(false)
      setdata(beers);

    } catch (error) {
      seterror(true)
    }
  };
  useEffect(() => {
    fetchData();
  }, [query]);
  if(error){
    return(<div className="error">Something went wrong</div>)
  }
  return (
    <>
    
      <div className="inpbox">
        <Input
          placeholder="Search beer"
          size="lg"
          variant="outline"
          colorScheme="cyan"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
      </div>
      {loading?(<div className="spinner">
      <Spinner
      m="auto"
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
      </div>):<div className="App">
        {data?.map((ele, index) => {
          return (
            <Box
            key={index}
              image_url={ele.image_url}
              name={ele.name}
              first_brewed={ele.first_brewed}
              disp={ele.description}
            />
          );
        })}
      </div>}
     
    </>
  );
}

export default App;
