import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <>
      <Navbar title={"YaStudio"} />
      <div className="container my-3">
        <div className="row">
          <div className="col-md-12">
          <TextForm heading="Enter Text" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;