import "../style/index.css";
import axios from "axios";

import { useState } from "react";
import { data } from "react-router-dom";
const Index = () => {
  const [username, setUserName] = useState("");
  const [Data, setData] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://api.github.com/users/${username}`);
    if(res){
      console.log(res.data);
      setData(res.data);
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
      
      {Data ?( <section className="details">
        
        <div className="img">
          <img src={Data.avatar_url} alt="" />
        </div>
        <div className="info">
          <h1>FullName: {Data.name}</h1>
          <p>Bio: {Data.bio}</p>
          <p>Repo Count: {Data.public_repos} </p>
          <p>Followers:{Data.followers}</p>
          <p>
            <a href={Data.html_url}>Repo Link</a>
          </p>
        </div>
      </section>): <h1 style={{textAlign:"center"}}>Ooops can't find user</h1>}
     
    </>
  );
};

export default Index;
