const Loginbutton = ({value, onClick}) => {
  return (
    <button type="button" className="w-36 h-16 border-solid border-2 mt-2 ml-2" onClick={onClick}>{value}</button> 
  )
}

export default Loginbutton;