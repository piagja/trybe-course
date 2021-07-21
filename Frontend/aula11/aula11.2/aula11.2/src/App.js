import React from 'react'
import SeriesList from './components/SeriesList'
import catalog from './data'

export default function App() {
  return (
    <main>
      <h1>Top 5 Animes para você assistir</h1>
      <section>
        <SeriesList catalogData={catalog} />
      </section>
    </main>
  )
}
