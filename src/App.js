// import logo from './logo.svg';
import './App.css';

import {useState} from "react";
import { Switch, Route, Link, Redirect, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { useHistory } from "react-router-dom";


export default function App() {
  // console.log("hi");
  const INITIAL_MOVIES = [{
    name:"Avatar",
    pic:"https://cdna.artstation.com/p/assets/images/images/031/645/214/large/shreyas-raut-avatar-2.jpg?1604210989&dl=1",
   
    rating:"7.8",
    summary:"On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids. Jake Sully a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman. As a bond with her grows, he is drawn into a battle for the survival of her world.",
    trailer:"https://www.youtube.com/embed/5PSNL1qE6VY"  
  },
{
  name:"Master",
  pic:"https://pbs.twimg.com/media/ENHK08SUEAEdnAx.jpg",
  
  rating:"7.8",
  summary:"Troubled alcoholic teacher JD is sent to teach at a juvenile reform school. But when he realises a dangerous criminal is using his students to cover up his crimes, JD sets out to stop him. Strong violence, drug misuse.",
  trailer:"https://www.youtube.com/embed/UTiXQcrLlv4"
},
{
  name:"96",
  pic:"https://moviegalleri.net/wp-content/uploads/2018/07/Trisha-Krishnan-Vijay-Sethupathi-96-Movie-New-Poster.jpg",
 
  rating:"8.6",
 summary:"K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.",
 trailer:"https://www.youtube.com/embed/r0synl-lI4I"
},
{
  name:"Pelli Choopulu",
  pic:"https://wallpapercave.com/wp/wp7024418.jpg",
  
  rating:"8.2",
 summary:"Vijay's father, who is fed up with Vijay's carefree life, decides to make him marry a girl in hopes that he might become a responsible man. However, meeting an ambitious girl changes his life for the better.",
 trailer:"https://www.youtube.com/embed/9v9nESxBpqU"
},
 {
  name:"Jagame Thandhiram",
  pic:"https://www.kollywoodzone.com/data/media/11148/jagame_thanthiram_movie_posters_03.jpg",
  
  rating:"6",
 summary:"Suruli, a kind-hearted gangster, goes to London and gets embroiled in several criminal activities. However, the stakes get higher when he falls in love with a beautiful singer named Attila.",
 trailer:"https://www.youtube.com/embed/2OtgYcd83Qg"
},
 {
  name:"squid game",
  pic:"https://cdn.vox-cdn.com/thumbor/vmRga6mG5sihYrHyZ43WswwtyIU=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22911132/EN_SQdGame_Main_PlayGround_Horizontal_RGB_PRE.jpeg",
  
  rating:"8.1",
 summary:"Squid Game's basic story revolves around 456 heavily debt-ridden people from different age groups and strata of society, who participate in six rounds of various children's games to win a humongous sum of money.",
 trailer:"https://www.youtube.com/embed/oqxAJKy0ii4"
}
];
const [movies, setMovies] = useState(INITIAL_MOVIES);
  return (
    <div className="App">
<ul className="ul-list">
        <li>
          <a href="/">✨ Welcome</a>
        </li>
        <li>
          <Link to="/">🏡 Home</Link>
        </li>
        <li>
          <Link to="/addmovies">🎬 AddMovies</Link>
        </li>
        <li>
          <Link to="/movielist">🎬 Movielist</Link>
        </li>
        <li>
            <Link to="/addcolor" >🟡 Addcolor</Link>
          </li>
      </ul>

      <hr />

      <Switch>
      
      <Route exact path="/">
          <Home />
        </Route>

      <Route path="/films">
          <Redirect to="/movielist" />
        </Route>
       
        <Route path="/addmovies">
          <AddMovie movies={movies} setMovies={setMovies}/>
        </Route>

        <Route path="/movielist/:id">
        <MovieDetails movies={movies}/>
        </Route>

        <Route path="/movielist">
        <MovieList movies={movies} setMovies={setMovies}/>
        </Route>

        <Route path="/addcolor">
        <AddColor/>
        </Route>


        <Route path="**">
          <NotFound/>
        </Route>

        

      </Switch>
   
    </div>
  );
}
//when two  components needs the same data(movies)-> put the data in the common parent component (App) - HOC - Higher order components 

function NotFound(){
  return(
    <div className="not-found-pic">
      <h1 className="not-found-name">404 Not Found</h1>
      <img  src="https://s12emagst.akamaized.net/assets/hu/images/error_404_600px.gif" alt="404 not found"/>
    </div>
  );
}
function Home() {
  return (
    <div className="home">
      <h2 className="home-hello">Hello All!!!</h2>
      <img className="home-pic" src="https://cdn.dribbble.com/users/27231/screenshots/2432051/welcome.gif" alt="welcome"/>
    </div>
  );
}

function MovieDetails({movies}){
  const {id} = useParams();
  const moviedet = movies[id]; 
  console.log(moviedet);
  const styles = {
    color: moviedet.rating<8? "crimson":"green",
    fontWeight:"bold"
  };
  return(
  <div className="details">
        <iframe width="1430" height="650" src={moviedet.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <div className="det"> 
        <h1 className="user-name">{moviedet.name}</h1>
      <p style= {styles}> ⭐{moviedet.rating} </p>
      </div>
     
    <p>{moviedet.summary}</p>
    
    </div>
  );
}

function AddMovie({movies,setMovies}){
  const [name, setName] = useState("");
const [pic, setPic] = useState("");
const [rating, setRating] = useState("");
const [summary, setSummary] = useState("");
const [trailer, setTrailer] = useState("");

const newMovies= {pic, name, rating, summary,trailer};//shorthand
const addMovie =()=>{
  
  setMovies([...movies,newMovies]);
};

  return(
<div className="in-con">

<TextField value={pic} 
      onChange={(event)=>setPic(event.target.value)}  label="enter movie url" variant="filled" />
     
     <TextField value={name}
      onChange={(event)=>setName(event.target.value)} label="enter movie name" variant="filled" />

      <TextField value={rating}
      onChange={(event)=>setRating(event.target.value)}  label="enter movie rating" variant="filled" />

      <TextField value={summary}
      onChange={(event)=>setSummary(event.target.value)}  label="enter movie summary" variant="filled" />

      <TextField value={trailer}
      onChange={(event)=>setTrailer(event.target.value)}  label="enter movie trailer" variant="filled" />
    
      <Button onClick={addMovie} variant="contained">Add movies</Button>
     
    </div>
  );
} 

function Counter(){
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return(
<div className="button-like">
<IconButton onClick={()=> setLike(like+1)} aria-label="like">
<Badge badgeContent={like} color="primary">👍</Badge>
      </IconButton>
      <IconButton onClick={()=> setDisLike(disLike+1)} aria-label="dislike">
<Badge badgeContent={disLike} color="error">👎</Badge>
      </IconButton>
  
  </div>
  );
}
function MovieList({movies, setMovies}){
  return(
    <section>
         {movies.map(({pic, name, rating, summary},index)=>(
       <Movie name={name} pic={pic} rating={rating} summary={summary} id={index}
       deleteButton= {<IconButton aria-label="delete" color="error"
       onClick={()=>{
         console.log("deleting...",index);
         const deleteIdx = index;
         const remainingMovies = movies.filter((mv,idx)=>idx!==deleteIdx);
         console.log("Remaining...",remainingMovies);
         setMovies(remainingMovies);
         }}>
       <DeleteIcon />
     </IconButton>}
       editButton= {<IconButton aria-label="edit"  color="success">
       <EditIcon />
     </IconButton>}
       />
     ))}
    </section>
  );
}

function Movie({pic, name, rating, summary,id,deleteButton,editButton}){
const [show,setShow] = useState(true);
const history = useHistory();
const styles = {
  color: rating<8? "crimson":"green",
  fontWeight:"bold"
};
const summaryStyles = {
  display:show?"block":"none"
};
  return (
    
    <div className="container">
     
      <div className="full-det">
      
      <img className="user-pic" src={pic} alt={name}/>
      <div className="details">
        
        <div className="det"> <h1 className="user-name">{name}  
        <IconButton onClick={()=>{console.log(id);
        // /movies/0
        history.push("/movielist/"+id);
        }} color="primary" aria-label="more-info">
        <InfoIcon/>
</IconButton>
<IconButton onClick={()=>setShow(!show)} color="primary" aria-label="description">
 {show?<ExpandLessIcon/>:<ExpandMoreIcon/>}
</IconButton>
</h1>
       
      <p style= {styles}> ⭐{rating} </p>
      </div>
     {/* <button >{show?"hide":"show"}description</button> */}
      {show?<p style={summaryStyles}>{summary}</p>:""}
      <div className="count-edit"><Counter/>
<div className="edit-delete">{editButton}{deleteButton}</div></div>
      
      
    </div>
    </div>
    </div>
    
    
  );
}


function AddColor(){
  const [color, setColor] = useState("pink");
const styles = {backgroundColor: color};
const [colors, setColors] = useState(["teal", "orange"]);
  return(
    <div>
      <input
      value={color}
      onChange={(event)=>setColor(event.target.value)}
      style={styles}
      placeholder="enter a color"
      />
       
      <button onClick={()=> setColors([...colors, color])}>Add color</button>
      {colors.map((clr,index)=>(<ColorBox key={index} color={clr}/>))}
    </div>
  );
}

function ColorBox({color}){
  const styles = {
    backgroundColor:color,
    height: "40px",
    width:"600px",
    marginTop:"10px",
  };
  return <div style = {styles}></div>
}