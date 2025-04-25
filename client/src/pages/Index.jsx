import "../style/index.css";
import axios from "axios";

import { useState } from "react";
import { data } from "react-router-dom";
const Index = () => {
  const [username, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [Data, setData] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!username.trim()){
      setMessage("Please enter a valid username")
      return;
    }

    const res = await axios.get(`https://api.github.com/users/${username}`);
    if(res){
      console.log(res.data);
      setData(res.data);
      setMessage("")
    }
    if(res.status === 404){
      setMessage("User not found")
      setData(null)
    }
  }

  return (
    <>
      <main>
        <section>
          <div className="overview-over">
            <h1>Enter Username</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter Github Name" onChange={(e) => setUserName(e.target.value)}/>
              <button>Submit</button>
            </form>
          </div>
        </section>
      </main>
      <hr />
      { Data ?(
       <section className="details">
   
        <div className="img">
          <img src={Data.avatar_url} alt="" />
        </div>
        <div className="info">
          <h1>FullName: {Data.name}</h1>
          <p>Bio: {Data.bio}</p>
          <p>Repo Count: {Data.public_repos} </p>
          <p>Followers:{Data.followers}</p>
          <p>
            <a href={Data.html_url}>Github Link</a>
          </p>
        </div>
      </section>) :  <p>{Data}</p>
      }
      <section className="message">
        <h1>{message}</h1>
      </section>  
     
    </>
  );
};

export default Index;
