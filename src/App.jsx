import './App.css'
// import Button from './Components/Button-Component/Button'
import Condition from './Components/Condition/Condition'
import Event from './Components/Events/Event'
import Form from './Components/Form/Form'
import ReactHookForm from './Components/Form/ReactHookForm'
import ReactHookForm2 from './Components/Form/ReactHookForm2'
import ReactHookForm3 from './Components/Form/ReactHookForm3'
// import StateComp from './Components/Events/StateComp'
// import StateManagement from './Components/Events/StateManagement'
import TryCatch from './Components/Hooks/TryCatch'
import UseEffect from './Components/Hooks/UseEffect'
import UseReference from './Components/Hooks/UseReference'
import ListRendering from './Components/ListRender/ListRendering'
import Property from './Components/Props/Property'

function App() {

  return (
    <>
    <ReactHookForm3/>
    <ReactHookForm2/>
    <ReactHookForm/>
    <Form/>
    <TryCatch/>
      <UseEffect/>
      {/* <Button /> */}
      <Condition/>
      <Property/>
      {/* <NewComp/> */}
      <ListRendering/>
      <Event/>
      <UseReference/>
      {/* <StateManagement/> */}
      {/* <StateComp/> */}
    </>
  )
}

export default App
