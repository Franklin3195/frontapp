import Button from '@/components/Ui/Button'
import React, { useState } from 'react'

const HomeContent = () => {
  const [expanded, setExpanded] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const toggleExpand = () => {
    setExpanded(!expanded)
  }


  return (
    <div
      className="relative"
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        fontSize: '3rem'
      }}
    >
      <div className="p-4 bg-opacity-90 bg-black-900 text-center rounded-md relative z-10">
        <p className="mb-6 text-3xl font-bold">
          NO ESTÁ MAL ACEPTAR QUE TIENES UNA AFECCIÓN MENTAL.
        </p>
        <div
          onClick={toggleExpand}
          className={`cursor-pointer transition-all duration-500 ${
            expanded ? 'h-auto' : 'h-30'
          } bg-transparent rounded-lg  flex flex-col items-center justify-evenly gap-4 px-4`}
        >
          <div className="text-black text-sm">
            <p
              className={`line-clamp-${expanded ? 'none' : '3'}`}
              style={{ fontSize: '16px', marginTop: '100px' }}
            >
              <strong>
                Conéctate contigo mismo. Completa tu perfil y realiza nuestros 4{' '}
                <br />
                tests psicológicos para obtener una evaluación inicial de tus{' '}
                emociones en segundos, <br />
                de manera gratuita. ¡Aprovecha la oportunidad de entender mejor
                tu bienestar emocional!
              </strong>
            </p>
          </div>
        </div>
        <Button
          className="w-80 h-16 bg-white cursor-pointer rounded-3xl border-2 border-primary-700 shadow-[inset_0px_-2px_0px_1px_border-primary-700] group hover:bg-primary-700 transition duration-300 ease-in-out"
          onClick={() => {
            window.location.href = '/rips'
          }}
          style={{
            marginTop: '20px',
            cursor: 'pointer',
            color: '#333',
            fontSize: '18px'
          }}
        >
          <span className="font-medium text-[#333] group-hover:text-white">
            ¡Empieza tu experiencia ahora!
          </span>
        </Button>
      </div>

    </div>
  )
}

export default HomeContent
