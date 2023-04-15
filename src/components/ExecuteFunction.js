const ExecuteFunction = ({showMessage}) => {
  return (
    <div>
        <h3>Executando função</h3>
        <button onClick={showMessage} >Teste a função por props</button>
    </div>
  )
}

export default ExecuteFunction