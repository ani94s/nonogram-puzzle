import { FC } from 'react'
import { Header } from './components'
import { GamePage } from './pages/game-page'

export const App : FC = () => {
  return (
    <div className='flex flex-col w-screen max-w-screen-xl'>
        <Header />
        <GamePage />
    </div>
  )
}