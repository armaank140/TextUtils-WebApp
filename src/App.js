import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setmod] = useState('light'); // check whether dark mode enable or not
  
  const [toggleText, settoggleText] = useState('Enable DarkMode'); //Change toggle Text
 
  const [alert, setAlert] = useState(null); //show alert msg
  
  const showAlert = (message, Type) =>{
        setAlert({
                  msg: message,
                  Type: Type
                   })
        setTimeout(()=>{
                   setAlert(null);
                   },1200);
}

  const toggleMode =()=>{
    if(mode==='light'){
      setmod('dark')
      document.body.style.backgroundColor = '#042743';
      settoggleText('Enable LightMode')
      showAlert("DarkMode has been Enabled","success")
      document.title = ("TestUtils - DarktMode");
    }
    else{
      setmod('light')
      document.body.style.backgroundColor = 'white';
      settoggleText('Enable DarkMode')
      showAlert("LightMode has been Enabled","success")
      document.title = ("TestUtils - LightMode");

    }
  } 

  // git first commit
  return (
    <>
        <Navbar title = "TextUtils"  mode={mode}  toggleMode={toggleMode} toggleText={toggleText} />
        <Alert alert={alert}/>
        
        <div className='container'>
          <TextForm showAlert={showAlert} heading =" Enter the text to analyze" mode={mode}/>
          {/* <About/> */}
        </div>
    </>
  )
}
export default App;
