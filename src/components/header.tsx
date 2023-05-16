import { FC } from 'react'
import { anilogo } from '../assets'

export const Header: FC = () => {
    return <header className="fixed flex justify-center w-full top-0 shadow-md shadow-black bg-primary z-20 h-14">
        <nav className="xl:max-w-[1440px] w-full sm:px-8 px-4 text-white flex justify-between items-center navbar">
            <div className="flex flex-row py-4 w-28">
                <img src={anilogo} alt="Logo" className="w-[46px] h-[32px]" />
                <div className="flex flex-col align-middle justify-start text-xs uppercase font-poppins">
                    <p>Anirudhan</p>
                    <p>Srisudhan</p>
                </div>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <h1 className='text-xl font-medium'> Nonogram </h1>
            </div>
            <div className='w-28'>
                
            </div>
        </nav>
    </header>
}
