import Evento from "@/components/basicos/Evento";

export default function EventoPage(){
  return(
    <div className="flex justify-center items-center flex-wrap gap-5 h-screen bg-purple-400">
      <Evento/>
      <Evento/>
      <Evento/>
    </div>
  )
}