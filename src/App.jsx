import React, {useState} from "react"
import Button from "./components/button/button"
import Paragraph from "./components/format-paragraph/paragraph"
import './App.css'

function App() {
  const [text, setText] = useState("Para verificar a Transformação, clique logo abaixo, em Clique Aqui!");
  const [color, setColor] = useState('blue') 

  const TransformationButton = (Text) => {
        setText((prev) => prev.toUpperCase());
        setColor('orange');
        alert(`A Label desse Botão é o que faz a ${Text} `); 
  };

  return (
    <>
      <Paragraph text={text} color={color} />

      <Button onClick={() => TransformationButton('Transformação')} /> 
    </>
  )
}

export default App

