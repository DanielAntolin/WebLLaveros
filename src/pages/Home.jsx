import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importa estilos para Home

export function Home() {
  return (
    <main className="home">
      
      <section className="division">
        <h2>PRIMERA DIVISIÓN</h2>
        <Link to="/products" className="ver-aqui">¡Ver aquí!</Link> {/* Enlace a la página de productos */}
      </section>

      <section className="division">
        <h2>SEGUNDA DIVISIÓN</h2>
        <Link to="/products" className="ver-aqui">¡Ver aquí!</Link> {/* Enlace a la página de productos */}
      </section>

      <section className="division">
        <h2>EQUIPOS REGIONALES</h2>
        <Link to="/products" className="ver-aqui">¡Ver aquí!</Link> {/* Enlace a la página de productos */}
      </section>
    </main>
  );
}