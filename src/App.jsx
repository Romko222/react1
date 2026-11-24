import './App.css'

function App() {

  const name = "Roma"
  const imgSrc = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200"
  const imgAlt = "cat"
  const object = {
    name: "youtube",
    url: "https://www.youtube.com/"
  }
  const a = 3
  const b = 19
  const array = ["Червоний", "Синій", "Зелений"]

  return (
    <>
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту</p>
      <img src={imgSrc} alt={imgAlt} />
      <a href={object.url}>{object.name}</a>
      <p>Sum: {a + b}</p>
      {array.map((color) => (
        <p>{color}</p>
      ))}
    </>
  )
}

export default App
