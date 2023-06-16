import { createContext, useContext, useState } from 'react'

const CyclesContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)
  return (
    <h1>
      NewCycleForm: {activeCycle}
      <button onClick={() => setActiveCycle((state: any) => state + 1)}>
        Alterar ciclo ativo
      </button>
    </h1>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext)

  return <h1>CountDown: {activeCycle}</h1>
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <h1>HOME TEM {activeCycle}</h1>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
