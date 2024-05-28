import { Col, Container, Row } from "react-bootstrap";
import Articleitem from "../../components/article/Articleitem";
import MyNavbar from "../../components/navbar/Navbar";
import Footer from  "../../components/footer/Footer"
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
   const [articles,setArticles]=useState([]);
    useEffect(()=>{
     axios
     .get("http://localhost:5000/article")
     .then((respose)=>setArticles(respose.data))
    },[])
    return (
        <>
        <MyNavbar/>
       <Container>
        <h1 className="my-4">Home page</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 ">
        {articles.map((article)=> ( 
        <Col key={article.id}>
          <Articleitem {...article}/>
          </Col>
          ))} 
           
        </Row>
       </Container>
       <Footer/>
       </>
     );
}

export default Home;