
import './App.css';
import './style.css';
import { useRef, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';

function App() {

  const [list, setList] = useState([

    {name: "Remi", imgsr: "https://m.media-amazon.com/images/I/81J5QxxmKpL._SY606_.jpg",rate: "5" },
    { name: "Simba", imgsr: "https://th.bing.com/th/id/OIP.G9A2Hso7-wvAwPXuZb4j-QHaEo?pid=ImgDet&rs=1", rate: "4" },
    { name: "Tom&jerry", imgsr: "https://th.bing.com/th/id/OIP.tzY_FDfc82nSf8j-5CjvzAHaEo?pid=ImgDet&rs=1", rate: "4.5" },

  ])
   const search = useRef()

    const [filtredlist, setfirtre] = useState(list)
const filter=()=>{
  setfirtre(list.filter(e=>e.name.includes(search.current.value)))
}
const [rating, setRating] = useState()
const onStarClick=(nextValue)=>{
  setRating(nextValue);
  console.log(nextValue);
  setfirtre(list.filter(e=>e.rate>=nextValue))
}
  const p = useRef()
    const p2 = useRef()
    const p3 = useRef()
    const add = () => {
    setList([...list,
    {
      name: p.current.value,
      imgsr: p3.current.value,
      rate: p2.current.value

    }
    ])
  }
  return (
    <div className="App">
       <div className='search'>
                    <input type={"text"} ref={search} onChange={filter} placeholder='enter movie name'></input>
                     <StarRatingComponent 
                   name="rate1" 
                  starCount={5}
                   value={rating}
          onStarClick={onStarClick}
        />
                </div>
      <div>
                 <input type={"text"} ref={p} placeholder="name movie"></input>
        <input type={"text"} ref={p2} placeholder="rate movie"></input>
        <input type={"text"} ref={p3} placeholder="image link"></input>
        <button onClick={add}>+</button>
       
        <br />
      </div>
      <div className='movie'>
        {filtredlist.map(e =><p>{e.name}
          {e.rate}
          <img src={e.imgsr}></img>
        </p>)}
      </div>
    
    </div>
  )
}

export default App;

