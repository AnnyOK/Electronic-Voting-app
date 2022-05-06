import React,{useState,useEffect} from 'react';
import Axios from 'axios'
import "./Voterdashboard.css"
//import axios from 'axios';

function VoterDashboard() {
    const dummy=[{name:"Jonathan",status:true,count:0},
    {name:"Atiku",status:true,count:0},
    {name:"Tinubu",status:true,count:0},
    {name:"Osibanjo",status:true,count:0}]
    const [posts,setPosts] = useState([])

    useEffect(()=>{
    
        Axios.get('http://localhost:4000/aspirants')
    .then(res=>{
        console.log(res)
        const results = [];
        for(const key in res){
            const result={
                id:key,
                ...res[key]
            };
            results.push(result);
        }
        return setPosts(results)
    })
    .catch(error => console.log(error))
    },[]);
    return (
        <div>
            <ul>
                {
                results?.map(post=><li key={post._id}>
                <h1>{post.name}</h1>
                 <p>{post.Status}</p>
                <button>vote</button>
                </li>)
                }
            </ul>
        </div>
    );
}

export default VoterDashboard;