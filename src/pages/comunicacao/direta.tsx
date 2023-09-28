import Avo from "@/components/comunicacao/direta/Avo";

export default function DiretaPage(){
  return(
    <div className="flex flex-col p-5 justify-center items-center h-screen">
      <h1 className="text-5xl mb-10">Comunicacao Direta</h1>
        <Avo nome="Jussara" sobrenome="Alves"/>
    </div> 
  )
}