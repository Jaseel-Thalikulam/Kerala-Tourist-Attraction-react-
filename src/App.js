
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Card from './components/card/card'

const arr = [
  {
    place: 'Thekkady',
    description: 'Thekkady is a town near Periyar National Park, an important tourist attraction in the Kerala state of India.',
    imgUrl : 'https://assets.traveltriangle.com/blog/wp-content/uploads/2015/12/periyar-wildlife-sanctuary.jpg',

  },
  {
    place: 'Allapuzha',
    description: 'Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala',
    imgUrl : 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cc/95/14/alleppey-backwater-tour.jpg?w=1200&h=900&s=1',

  },
  {
    place: 'Periyar',
    description: 'Periyar National Park, also known as Periyar Tiger Reserve, is in the mountainous Western Ghats of Kerala, southern India.',
    imgUrl : 'https://ihplb.b-cdn.net/wp-content/uploads/2017/04/Wildlife-Safari-in-Periyar.jpg',

  },
  {
    place: 'Wayanad',
    description: 'Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a lush, forested region with areas of high altitude, home to animals including Asiatic elephants, tigers, leopards and egrets',
    imgUrl : 'https://www.wayanad.com/files/slides/7110478409.jpg',

  },
  {
    place: 'Kovalam',
    description: 'Kovalam is a small coastal town in the southern Indian state of Kerala, south of Thiruvananthapuram. At the southern end of Lighthouse Beach is a striped lighthouse with a viewing platform',
    imgUrl : 'https://www.tourmyindia.com/blog//wp-content/uploads/2022/06/Best-Places-to-Visit-in-Kovalam-Kerala.jpg',

  },
  {
    place: 'Thrissur',
    description: 'Thrissur is a city in the south Indian state of Kerala. Its known for sacred sites and colorful festivals',
    imgUrl : 'https://assets-news.housing.com/news/wp-content/uploads/2022/08/18064753/Thrissur-7.jpg',

  },
]

function App() {
  return (
    <div className='app'>
      
      <Header />

      <h1>Destination</h1>

      <div className='card-container'>
        
      {arr.map((item) => {
        return (
          
          <Card {...item} />
          )
          
        })}

        </div>
      <Footer/>
     
   </div>
  );
}

export default App;
