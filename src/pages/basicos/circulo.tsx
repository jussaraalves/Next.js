import Circulo from "@/components/basicos/Circulo";

export default function CirculoPagina(){
  return(
    <div className={`
      flex justify-around items-center
      h-screen
    `}>
      <Circulo texto="circ #1"/>
      <Circulo texto="circ #2"/>
      <Circulo texto="circ #3"/>
      <Circulo texto="circ #3" quasePerfeito/>
    </div>
  )
}