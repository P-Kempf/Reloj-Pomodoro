import React, { useEffect } from "react";
import { useState } from 'react';
import "./reloj.css"



function Reloj() {
    const [minutos, setMinutos] = useState(25)
    const [segundos, setSegundos] = useState(5)
    const [empezar, setEmpezar] = useState(false)
    const [isDescanso, setIsDescanso] = useState(false)
    const [cicloDeEstudio, setCicloDeEstudio] = useState(0)

    const resetarTiempo = () => {
        setEmpezar(false)
        setIsDescanso(false)
        setCicloDeEstudio(0)
        setSegundos(0)
        setMinutos(25)
        setSegundos(0)

    }
    const empezarDescanso = () => {
        setIsDescanso(!isDescanso)
        setCicloDeEstudio(cicloDeEstudio + 1)
        console.log(cicloDeEstudio)
        !isDescanso ? cicloDeEstudio === 6
            ? setMinutos(25)
            : setMinutos(5)
            : setMinutos(25)
    }


    useEffect(() => {
        if (empezar) {
            if (minutos === 0 && segundos === 0) {
                empezarDescanso()
            }
            if (segundos > -1) {
                setTimeout(() => setSegundos(segundos - 1), 1000);
            }
            else {
                setTimeout(() => setMinutos(minutos - 1), setSegundos(59), 1000)


            }

        }

    }, [empezar, minutos, segundos])






    return (
        <div id="contenedor" >

            {empezar ? <h2>{isDescanso ? "Es Hora de Relajarse" : "Es Hora de Estudiar"}</h2> : <h2>{isDescanso ? "Continua con el descanso" : "Pulsa el Boton para empezar tu tiempo de estudio"}</h2>}
            <p>Tiempo Restante   {minutos.toString().padStart(2, "0")} : {segundos.toString().padStart(2, "0")} </p>
            <button onClick={() => setEmpezar(!empezar)}>{empezar ? "Pausar" : "Empezar"}</button>
            {empezar ? <></> : <button onClick={() => resetarTiempo()}>Resetear</button>}


        </div>
    )
}
export default Reloj