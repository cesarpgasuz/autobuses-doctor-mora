import ObtenerData from './services'

function App() {

  const { data, loading } = ObtenerData()



  return (
    <section className='w-[90%] sm:w-[80%] mx-auto max-w-screen-lg'>
      <h1 className='text-center font-bold text-slate-800 text-3xl'>Horario Flechas Amarillas Doctor Mora</h1>

      {loading && <p className='text-center font-bold text-slate-300 text-3xl mt-8'>obteniendo los horario...</p>}

      {data && (

        <div className='w-fit mx-auto py-8 flex flex-col gap-4'>
          {data.map(element => (
            <article key={element.id} className='flex gap-8 bg-slate-200 p-3'>
              <div>Hora: <strong>{element.horario}</strong></div> <div className='font-bold'>{element.destino}</div> </article>
          ))}
        </div>

      )}




    </section>
  )
}

export default App
