import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../../components/Forms/LoginForm";
import Navbar from "../../components/Navbar";
import ProductTable from './ProductTable'

const Index=() =>{
    const [loggedInUser, setLoggedInUser] = useState(null);
  
    const handleLogin = (username) => {
      setLoggedInUser(username);
    };
  
    const handleLogout = () => {
      localStorage.removeItem("access_token");
      setLoggedInUser(null);
    };
  
    return (
        <>
        <Navbar loggedInUser={loggedInUser} onLogout={handleLogout}/>
         <Container>
        
        {loggedInUser ? (
          <>
            <h1 className="d-flex justify-content-center">Welcome, {loggedInUser}!</h1>
      
            <ProductTable loggedInUser={loggedInUser}/>
          </>
        ) : (
          <Row className="justify-content-md-center">
            <Col md={6}>
              <LoginForm onLogin={handleLogin} />
            </Col>
          </Row>
        )}
      </Container></>
     
    );
  }
  
  export default Index;