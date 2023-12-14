import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'js-cookie'

function Auth() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  // const [msg,setMsg] = useState('')
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://longsox.netlify.app/.netlify/functions/api/user/login',{
              
              email: email,
              password: password,
              
            })
            if (response.status === 200) {
              console.log(response)
              Cookies.set('accessToken', response.data.accessToken )
            alert('Login Berhasil')
            setTimeout(() => {
              navigate('/')
              setEmail('')
              setPassword('')
            })
              
            } else {
              alert(response.data.msg)
              
            }
            
      
    } catch (error) {
      console.log(error)
    }
  }

  const HandleRegister = async(e) =>{
    e.preventDefault();
    console.log(name+' '+email+''+password+''+confPassword)
    try {
      const response = await axios.post('https://longsox.netlify.app/.netlify/functions/api/user/register',{
        name: name,
        email: email,
        password: password,
        confPassword: confPassword
      })
        alert("Register Berhasil")
        setRadioValue('1')
        setName('')
        setEmail('')
        setPassword('')
        setConfPassword('')
      
    } catch (error) {
      if(error.response){
        console.log(error.response.data)
      }
    }
  }

  const [checked, setChecked] = useState(false);
  const {type} = useParams()
  
  
  const [radioValue, setRadioValue] = useState('1');
  useEffect(() => {
    setRadioValue(type === 'login'? '1': '2')
  },[])

  const radios = [
    { name: 'Login', value: '1'},
    { name: 'Register', value: '2' },
  ];
  
  const handleSwitch = (e) => {
    setRadioValue(e.currentTarget.value)
  }
  return (
    <div style={{ display:'flex', justifyContent:'center', flexDirection:"column", alignItems:'center', width:'100vw'}}>
            <h2 style={{textAlign:'center'}}>{radioValue === '1'? "Login Account" : "Register Account"}</h2>
       <ButtonGroup style={{width:'30%', margin:'20px 0px', minWidth:'240px'}}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-secondary' : 'outline-secondary'}
            name="radio"
            
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => handleSwitch(e)}
            
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      {radioValue === '1'? 
    <Form style={{minWidth:'240px', width:'30%'}}>

      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button style={{backgroundColor:"#579BB1", padding:'10px 15px'}} type="submit" onClick={(e) => handleLogin(e)}>
        Login
      </Button>
    </Form>: 


    <Form  style={{minWidth:'240px', width:'30%'}}>    
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="name" placeholder="name"value={name} onChange={(e) => setName(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="konfirmasi password" placeholder="konfirmasi Password"value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button style={{backgroundColor:"#579BB1", padding:'10px 15px'}} type="submit" onClick={(e) => HandleRegister(e)}>
      Register
    </Button>
  </Form> 
    }
    </div>
  );
}


export default Auth;