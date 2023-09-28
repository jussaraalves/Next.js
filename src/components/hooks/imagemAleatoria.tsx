import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria(){
  const url: string = 'https://source.unsplash.com/featured/300x300?'
  const [pesquisa, setPesquisa] = useState<String>('Abstract');
  const [tamanho, setTamanho] = useState(300);

  function urlImagem(){
    return `${url}${tamanho}x${tamanho}?${pesquisa}`
  }

  function renderButtom(valor: string){
    return(
      <button className={`
        bg-blue-500 px-4 py-2 rounded-md
      `} onClick={() => {
          setPesquisa(valor);
          console.log(urlImagem())
        }}>
        {valor}
      </button>
    )
  }
  return(
    <div className="flex flex-col gap-3 border border-pink-500 p-7 rounded-md">
      <div className={`flex justify-center gap-7 mb-5`}>
        <span>{pesquisa}</span>
        <span>{tamanho}x{tamanho}</span>
      </div>
      <Image 
        src={urlImagem()} 
        height={300} 
        width={300} 
        alt="Imagem"
        className="rounded-md"
      />
      <div className="flex gap-5 justify-between">
        {renderButtom('abstract')}
        {renderButtom('city')}
        {renderButtom('person')}  
      </div>
        <input 
          type="number" 
          value={tamanho} 

          onChange={e => {
            setTamanho(+e.target.value)
          }}
          className={`bg-zinc-700 p-2 outline-none rounded-md `}
        />
    </div>
  )
}