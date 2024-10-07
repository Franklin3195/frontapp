import React, { useState } from 'react'
import { PageLayout } from '@/components/Layout/page-layout'

const ExcelUploader = () => {
  const [file, setFile] = useState<File | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [resultados, setResultados] = useState<{ nombre: string; data: any }[]>(
    []
  )
  const [showDownloadButtons, setShowDownloadButtons] = useState(false)
  const [, setMensaje] = useState<string | null>(null) // Estado para el mensaje

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files && event.target.files[0]
    if (uploadedFile) {
      setFile(uploadedFile)
    }
  }

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData()
      formData.append('file', file)

      try {
        const response = await fetch('http://localhost:3000/excel/upload', {
          method: 'POST',
          body: formData
        })
        const data = await response.json()
        setResultados(data) // Guardar los resultados en el estado
        setShowDownloadButtons(true) // Mostrar los botones de descarga
        setMensaje('Archivo subido correctamente') // Actualizar el mensaje
      } catch (error) {
        console.error('Error al subir el archivo:', error)
        setMensaje('Error al subir el archivo') // Actualizar el mensaje en caso de error
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDownload = (fileName: string, jsonData: any) => {
    const json = JSON.stringify(jsonData)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDeleteFile = () => {
    setFile(null)
    setResultados([])
    setShowDownloadButtons(false)
    setMensaje(null) // Limpiar el mensaje al eliminar el archivo
  }

  return (
    <PageLayout>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <div
          style={{
            border: '2px dashed #aaa',
            borderRadius: '5px',
            maxWidth: '500px',
            maxHeight: '900px',
            padding: '20px',
            margin: '20px auto',
            width: 'fit-content',
            marginTop: '100px'
          }}
        >
          <label htmlFor="file-input">
            <div className="m-0 group px-10 py-12 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-blue-600 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all">
              <input
                type="file"
                accept=".xls,.xlsx"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                id="file-input"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                {' '}
                <rect width="16" height="9" x="28" y="15" fill="#21a366"></rect>
                <path
                  fill="#185c37"
                  d="M44,24H12v16c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2V24z"
                ></path>
                <rect width="16" height="9" x="28" y="24" fill="#107c42"></rect>
                <rect width="16" height="9" x="12" y="15" fill="#3fa071"></rect>
                <path
                  fill="#33c481"
                  d="M42,6H28v9h16V8C44,6.895,43.105,6,42,6z"
                ></path>
                <path
                  fill="#21a366"
                  d="M14,6h14v9H12V8C12,6.895,12.895,6,14,6z"
                ></path>
                <path
                  d="M22.319,13H12v24h10.319C24.352,37,26,35.352,26,33.319V16.681C26,14.648,24.352,13,22.319,13z"
                  opacity=".05"
                ></path>
                <path
                  d="M22.213,36H12V13.333h10.213c1.724,0,3.121,1.397,3.121,3.121v16.425 C25.333,34.603,23.936,36,22.213,36z"
                  opacity=".07"
                ></path>
                <path
                  d="M22.106,35H12V13.667h10.106c1.414,0,2.56,1.146,2.56,2.56V32.44C24.667,33.854,23.52,35,22.106,35z"
                  opacity=".09"
                ></path>
                <linearGradient
                  id="flEJnwg7q~uKUdkX0KCyBa_UECmBSgBOvPT_gr1"
                  x1="4.725"
                  x2="23.055"
                  y1="14.725"
                  y2="33.055"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#18884f"></stop>
                  <stop offset="1" stopColor="#0b6731"></stop>
                </linearGradient>
                <path
                  fill="url(#flEJnwg7q~uKUdkX0KCyBa_UECmBSgBOvPT_gr1)"
                  d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16 C24,33.105,23.105,34,22,34z"
                ></path>
                <path
                  fill="#fff"
                  d="M9.807,19h2.386l1.936,3.754L16.175,19h2.229l-3.071,5l3.141,5h-2.351l-2.11-3.93L11.912,29H9.526 l3.193-5.018L9.807,19z"
                ></path>{' '}
              </svg>
              <p className="cardtxt font-semibold text-black tracking-wider group-hover:text-white text-xl">
                Archivo Excel
              </p>
              <p className="blueberry font-semibold text-black tracking-wider group-hover:text-white text-base">
                Arrastra y suelta el archivo aquí o haz clic para seleccionar un
                archivo
              </p>
            </div>
          </label>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={handleUpload}
            disabled={!file}
            className="flex items-center bg-blue-600 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
          >
            Subir archivo
            <svg
              className="w-5 h-5"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
        </div>

        {showDownloadButtons &&
          resultados.map((resultado, index) => (
            <div key={index}>
              <button
                style={{ marginTop: '20px' }}
                onClick={() =>
                  handleDownload(`${resultado.nombre}`, resultado.data)
                }
                className="overflow-hidden relative w-36 p-2 h-12 bg-black text-white border-none rounded-md text-base font-bold cursor-pointer relative z-8 group"
              >
                Descargar JSON
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                <span className="absolute w-38 h-32 -top-8 -left-2 bg-blue-700 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-800 origin-left"></span>
                <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-8 z-10">
                  Ya esta listo
                </span>
              </button>
            </div>
          ))}
        {file && (
          <button
            onClick={handleDeleteFile}
            style={{ marginTop: '20px' }}
            className="inline-flex items-center px-7 py-3 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-base font-medium rounded-md hover:-translate-y-1 hover:scale-110"
          >
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
            Eliminar
          </button>
        )}
      </div>
    </PageLayout>
  )
}

export default ExcelUploader
