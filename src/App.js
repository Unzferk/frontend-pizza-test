import { useEffect, useState } from "react";

function App() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/pizzas")
    .then(response => response.json())
    .then(data =>{
      if(data){
        console.log(data.pizzas);
        setPost(data.pizzas);
      }
    });
  }, []);
  

  return (
    <>
      <h1>Hi world</h1>
      <hr></hr>
      <ul>
        {post && post.map( e=>(<li key={e._id}> {e.name}</li>))}
      </ul>
      
    </>
  );
}

export default App;
