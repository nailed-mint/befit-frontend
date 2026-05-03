import underConstructionGif from './assets/under_construction.gif'
import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <div>
          <h1>befit</h1>
          <p>
            aplicación web para registrar entrenamientos y progreso físico a lo largo del tiempo.
          </p>
        </div>
        <div>
          <img src={underConstructionGif} className="base" alt="" />
        </div>
      </section>
    </>
  )
}

export default App
