import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log("Efecto", { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log("handleMove", { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener("pointermove", handleMove)
    }
    //Limpiar las suscrupcoines cuando la dependencias cambian de estado
    //Funcion se ejecuta cada que la dependencia cambia de estado

    //Cleanup:
    //-> cuando el componente se desmonta
    //-> cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => {
      window.removeEventListener("pointermove", handleMove)
    }
  }, [enabled])
  return (
    <main>
      <div style={{
        position: "absolute",
        backgroundColor: "#09f",
        borderRadius: "50%",
        opacity: .8,
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  )
}

export default App
