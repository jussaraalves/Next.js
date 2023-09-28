export default function Caixa(props: any){
  return(
    <div className={`
      flex justify-center items-center
      bg-purple-500 m-2 rounded-md p-2
      w-[300px] h-[300px] text-2xl font-bold
    `}>
      {/* {Math.random()} */}
      {props.children}
    </div>  
  )
}