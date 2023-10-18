import React, { useState } from "react";
import {PiTrashSimpleLight} from 'react-icons/pi';
import Order from "./Order";

const showOrders=(props)=>{
    let summa = 0;
    props.orders.forEach(el=>summa +=Number.parseFloat(el.price))
    return(
        <div>
            {props.orders.map(el =>(
                <Order onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
            <p className="summa">оплата: {new Intl.NumberFormat().format(summa)}$</p>
        </div>
    );
}

const showNothing=()=>{
    return(
        <div className="empty">
            <h2>Корзина пуста</h2>
        </div>
    );
}

export default function Header(props){
    let[cartOpen, setCartOpen]=useState(false);


    return(
        <header>
            <div>
                <span className="logo">КНИГОДВИЖ</span>
            
            <ul className="nav">
                <li>про нас</li>
                <li>контакты</li>
                <li>кабинет</li>
                <li>Скачать что-то</li>
            </ul>
         <PiTrashSimpleLight  onClick={()=>setCartOpen(cartOpen=!cartOpen)} 
         className={`shop-cart-button ${cartOpen && 'active'}`}  size={50}/>
            {cartOpen &&(
                <div className="shop-cart">
                    {props.orders.length>0 ?
                    showOrders(props): showNothing()
                    }

                    
                </div>
            )}
            
            </div>
            <div className="presentation">
                
            </div>
        </header>
    );
}