import logo from '../assets/statics/logo.svg';
import '../assets/css/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hooks from '../components/Hooks';

function App() {
  return (
    <div className="App">
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
        />

        <Header></Header>
        <Hooks></Hooks>
        <Footer></Footer>
    </div>
  );
}

export default App;
