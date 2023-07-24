import React, { useState, useEffect } from 'react';
import styles from './styles/cronometro.module.css';

function Cronometro({debeDetenerse}) {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [cronometroID, setCronometroID] = useState(null);
  const [tiempoCronometro, setTiempoCronometro] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setSegundos(segundos => segundos + 1);
    }, 1000);
    setCronometroID(id);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    if (segundos >= 60) {
      setSegundos(0);
      setMinutos(minutos => minutos + 1);
    }
  }, [segundos]);

  useEffect(() => {
    if (minutos >= 60) {
      setMinutos(0);
      setHoras(horas => horas + 1);
    }
  }, [minutos]);

  useEffect(() => {
    if (debeDetenerse && cronometroID) {
      clearInterval(cronometroID);
      const tiempoFinal = { horas, minutos, segundos };
      setTiempoCronometro(tiempoFinal);
      localStorage.setItem('tiempoCronometro', JSON.stringify(tiempoFinal)); 
      localStorage.setItem('tiempoGuardado', JSON.stringify(tiempoFinal)); 
    }
  }, [debeDetenerse, cronometroID, horas, minutos, segundos]);

  const formatoTiempo = valor => {
    return valor < 10 ? `0${valor}` : valor;
  };

  return (
    <div className={styles.cronometro}>
      <img className={styles.taoCronometro} src="/images/cronometroTao.png" alt="Cronometro" />
      <div className={styles.titulo}>Tiempo transcurrido</div>
      <div className={styles.tictac}>{`${formatoTiempo(horas)}:${formatoTiempo(minutos)}:${formatoTiempo(segundos)}`}</div>    
    </div>
  );
}

export default Cronometro;