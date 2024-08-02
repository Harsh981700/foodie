import Delivery from "./Delivery"
import Food from "./Food"
import Hero from "./Hero"



const Home = ({handleAdd}) => {
  return (
    <div>
        <Hero/>
        <Delivery/>
        <Food handleAdd={handleAdd}/>
    </div>
  )
}

export default Home