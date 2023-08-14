import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import Loginformik from './components/pure/forms/loginFormik';
import Registerformik from './components/pure/forms/registerFormik';
import AsyncExample from './components/pure/AsyncExample';
import Observableexample from './components/pure/ObservableExample';
import Fetchexample from './components/pure/FetchExample';
import Axiosexample from './components/pure/AxiosExample';

function App() {
  return (
    <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/* Componente propio Greeting.jsx      */}
          {/* <Greeting name={"Erik"}></Greeting> */}
          {/* Componente de ejemplo funcional  */}           
          {/*<Greetingf name="Erik"></Greetingf>  */} 
          {/* Componente de listado de Tareas     */}           
          {/* <TaskListComponent></TaskListComponent> */}
          {/* <GreetingStyled name="Erik"></GreetingStyled> */}
        {/*</header>*/}
          {/* Gestion de Eventos */}
          {/*<Father></Father> */}
          {/*Ejemplo de Renderizado Condicional */}    
          {/*<OptionalRender></OptionalRender>*/}
          
          {/*Ejemplos de uso de Formik y yup */}
          {/*<Loginformik></Loginformik> */}
          {/*<Registerformik></Registerformik> */}

          {/* Ejemplos de procesos asincronos*/}
          {/*<AsyncExample></AsyncExample> */}
          {/* <Observableexample></Observableexample> */}
          {/* <Fetchexample></Fetchexample> */}
          <Axiosexample></Axiosexample>

          {/*PROYECTO FINAL */}
          {/*<TaskListComponent></TaskListComponent>*/}
    </div>
  );
}

export default App;
