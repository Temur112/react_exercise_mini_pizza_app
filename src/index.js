import React from "react";
import  ReactDOM  from "react-dom/client";
import './index_style.css';
// import pizzaData from './data.js';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App(){
    return <div className="wrapper">
        <Header/>
        <Main/>
        <Footer/>
    </div> ;
}


function Pizza({pizzaObj}){
    return <li className={`pizza__item ${pizzaObj.soldOut ? "sold_out" :""}`}>
        <img src={pizzaObj.photoName}alt=""/>
        <div className="pizza__content">
            <h1>{pizzaObj.name}</h1>
            <p>{pizzaObj.ingredients}</p>
            <p>{pizzaObj.soldOut ? "SOLD OUT":pizzaObj.price}</p>
        </div>
        
    </li>    
}

function Header(){
    return <header className="header">
        <div className="header__container">
            <h1 className="header__title">Fast react Pizza app</h1>
        </div>
        
    </header>
}

function Main(){
    return <main className="main">
        <div className="main__container">
            <PizzaItems/>
        </div>
    </main>
}

function PizzaItems(){
    const pizzas = pizzaData;

    return (
        (pizzas.length>0)?
        <>
            <p className="text">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
            <ul className="pizza_items">
                {pizzaData.map((pizza) => (
                <Pizza 
                    pizzaObj = {pizza}
                />
                ))}
            </ul>
        </>
        :null
    )
}

function Footer(){
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hour>=openHour && hour<=closeHour;
    console.log(isOpen);
    return (
        <>
            <footer className="footer"><FooterContent
                isOpen={isOpen}
            /></footer>
        </>
        
    )
}

function FooterContent({isOpen}){
    return (<div className="footer__container">
        {isOpen ? (<div> <p>We are cuurently open</p> <a href="#">Make order</a> </div> ):(<p>We are currently closed</p>)}
    </div>)
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);