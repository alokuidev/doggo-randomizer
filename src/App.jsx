

function App() {

  return (
    <>
      <div className="container">
        <h1 className="title">Random Dog Image</h1>
        <div className="imageContainer">
            <img id="dogImage" className="dogImage" src="" alt="Random Dog"/>
        </div>
        <button id="fetchButton" className="fetchButton">Fetch New Dog</button>
    </div>
    </>
  )
}

export default App
