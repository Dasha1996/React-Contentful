import About from './components/About/About';
import Carousel from './components/Carousel/carousel'
import Loader from './components/Loader/Loader';
import { Context, Provider } from './context/Context';

function App() {
  console.log(Context)

  return (
    <Provider>
        <div className="App">
          <Carousel></Carousel>
          <About/>
        </div>
    </Provider>
  );
}

export default App;
