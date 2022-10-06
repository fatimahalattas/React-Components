import './App.css';
import download from "./download.jpg";

function Title (){
  return <h1>React components</h1>
}
function Header(props){
  return (
    <header>
      <h2>{props.name}'s Kitchen</h2>
    </header>
  );
}
function Main(props){
  return (
    <section>
      <p>Serving the most {props.adjective} food</p>
      <img src={download} alt="resturant imae"/>
      <ul style={{textAlign: "left"}}>
      {props.dishes.map((dish) => (
        <li key={dish.id}>{dish.title}</li>
      ))}
      </ul>
    </section>
  );
}
function Footer(props){
  return (
    <footer>
      <p>CopyRight {props.year}</p>
    </footer>
  );
}

const dishes = [
  "Macaroni and Cheese", 
  "Salmon",
  "Veggie"
];

const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));
console.log(dishObjects);
function App() {
  return (
    <div className="App">
      <Title />
      <Header name= "Fatimah"/>
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
