import { useState } from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneSpace as peru } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { solarizedlight as tema } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Index() {
    const preguntas = [
        { id: 1, nivel: 'Fácil', pregunta: '¿Cuál es la función para imprimir en la consola en Python?' },
        { id: 2, nivel: 'Fácil', pregunta: '¿Cómo se define una lista vacía en Python?' },
        { id: 3, nivel: 'Intermedio', pregunta: '¿Cómo se realiza una iteración sobre un diccionario en Python?' },
        { id: 4, nivel: 'Intermedio', pregunta: '¿Cuál es el método para unir dos listas en Python?' },
        { id: 5, nivel: 'Avanzado', pregunta: '¿Cuál es la diferencia entre "deep copy" y "shallow copy" en Python?' },
        { id: 6, nivel: 'Avanzado', pregunta: '¿Cómo se manejan las excepciones en Python?' },
    ];

    const [pregunta, setPregunta] = useState(preguntas[0]);
    const [codigoConSaltosDeLineaReales, setCodigoConSaltosDeLineaReales] = useState('def imprimir_numeros():\n    for i in range(1, 11):\n        print(i)\n\n# Llamamos a la función\nimprimir_numeros()\n\n');

    return (
      <div> 
        <h2>{pregunta.pregunta}</h2>
        <SyntaxHighlighter language="python" style={peru} wrapLines={true}>
          {codigoConSaltosDeLineaReales}
        </SyntaxHighlighter>
      </div>
    )
}