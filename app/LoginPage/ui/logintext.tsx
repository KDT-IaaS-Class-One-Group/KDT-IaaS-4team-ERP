const Logintext = ({title}) => {

  return (
    <div className="w-full h-2/5">
      <label htmlFor="Idiputtext" className="w-1/5">{`${title} :`}</label>
      <input type="text" id="Idiputtext" className="w-4/5" />
    </div>
  )
}


export default Logintext;