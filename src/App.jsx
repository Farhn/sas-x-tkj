import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageGanjil from './pages/PageGanjil'
import PageGenap from './pages/PageGenap'


function App() {
  const [currentPage, setCurrentPage] = useState('home'); // State untuk halaman

  return (
    <div>
      {currentPage === 'home' && (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-200 text-black">
          <div className='gap-y-2 mb-6'>
            <h1 className="text-4xl font-bold">Ujian Praktik Kelas X TKJ</h1>
            <p className='text-lg text-center'>Pilih soal sesuai nomor urut absen kelasmu.</p>
          </div>

          <div className="flex gap-6">
            <button
              onClick={() => setCurrentPage('PageGanjil')}
              className="bg-slate-600 text-white font-semibold px-4 py-2 rounded mb-4"
            >
              Ke Soal Ganjil
            </button>

            <button
              onClick={() => setCurrentPage('PageGenap')}
              className="bg-cyan-600 text-white font-semibold px-4 py-2 rounded mb-4"
            >
              Ke Soal Genap
            </button>
          </div>

        </div>
      )}

      <div>
        {currentPage === 'PageGanjil' && (
          <>
            <PageGanjil />
            <button
              onClick={() => setCurrentPage('home')}
              className="bg-gray-800 text-white px-4 py-2 rounded top-4 left-4"
            >
              Back to Home
            </button>
          </>
        )}

        {currentPage === 'PageGenap' && (
          <>
            <PageGenap />
            <button
              onClick={() => setCurrentPage('home')}
              className="bg-gray-800 text-white px-4 py-2 rounded top-4 left-4"
            >
              Back to Home
            </button>
          </>
        )}
      </div>
    </div>
  )

}

export default App
