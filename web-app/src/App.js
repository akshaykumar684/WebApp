import './App.css';
import Form from './Components/FormComponent/RegisterForm'

function App() {
  return (
    <div className="form-row">
      <div className="form-group input-group col md 6"></div>
      <div className="form-group input-group col md 6"></div>
      <div className="form-group input-group col md 6">
        <Form />
      </div>
    </div>
  );
}

export default App;
