import react from "react"
import './style.css';

function Mainn() {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <li><a href='#'>Popular</a></li>
                    <li><a href='#'>Kids</a></li>
                    <li><a href='#'>Drama</a></li>
                    <li><a href='#'>Comedie</a></li>

                </ul>
            </nav>
            <form>
                <div className='search'>
                    <input type="text" placeholder='enter movie name'></input>
                    <button>search</button>
                </div>
            </form>


        </div>
    )
}

export default Mainn