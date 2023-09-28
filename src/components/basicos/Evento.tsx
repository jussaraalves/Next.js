export default function Evento(){
  let contatdor = 0

  function incrementar(){
    console.log(contatdor++)
  }

  return(
    <button className={`
      flex justify-center items-center
      h-72 w-72 bg-green-600
    `} onClick={incrementar}>
      Evento
    </button>
  )
}