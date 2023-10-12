import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Items from "./components/Items";
export default function App() {

  const [items,setItems] = useState([
    {
      id:1,
      title:'Книга 1',
      img:'',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Классика',
      price:'бесплатно',
    },
    {
      id:2,
      title:'Книга 2',
      img:'',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Классика',
      price:'бесплатно',
    },
    {
      id:3,
      title:'Книга 3',
      img:'',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Классика',
      price:'бесплатно',
    },
    {
      id:4,
      title:'Книга 4',
      img:'',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Проза',
      price:'бесплатно',
    },
    {
      id:5,
      title:'Книга 5',
      img:'',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Приключения',
      price:'бесплатно',
    },
    {
      id:6,
      title:'Книга 6',
      img:'',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Драма',
      price:'бесплатно',
    },
    {
      id:7,
      title:'Книга 7',
      img:'',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Классика',
      price:'бесплатно',
    },
    {
      id:8,
      title:'Книга 8',
      img:'',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Сатира',
      price:'бесплатно',
    },
    {
      id:9,
      title:'Книга 9',
      img:'',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'Юмор',
      price:'бесплатно',
    },
    {
      id:10,
      title:'Книга10',
      img:'',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category:'наука',
      price:'бесплатно',
    }
  ])




  return (
   <div className="wrapper">
    <Header/>
    <Items allItems={items}/>
    <Footer/>
   </div>
  );
}

