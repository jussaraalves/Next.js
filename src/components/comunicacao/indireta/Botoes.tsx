interface BotoesProps {
  inc: (valor: number) => void;
  dec: (valor: number) => void;
}

export default function Botoes(props: BotoesProps){
  return(
    <div className="flex justify-between pt-2 gap-2">
      <button className="botao" onClick={() => props.dec(10)}>
        +10
      </button>
      <button className="botao" onClick={() => props.inc(13)}>
        -13
      </button>
    </div>
  )
}