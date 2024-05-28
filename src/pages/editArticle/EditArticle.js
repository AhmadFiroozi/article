import MyNavbar from "../../components/navbar/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './EditArticle.css'
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
function EditArticle() {
    const [articleData ,setArticleData]=useState({})
    const articleID=useParams({}).articleID
    const navigate =useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:5000/article/${articleID}`)
        .then(response=>setArticleData(response.data))
       },[])
       const editArticleHandler=()=>{
         axios.put(`http://localhost:5000/article/${articleID}`,articleData)
         Swal.fire({
            title:"با موفقیت ویریش شد",
            timer:"1000",
            timerProgressBar:true,
            showConfirmButton:false
         })
         navigate(`/article/${articleID}`)
       }
       const formHandler =(event)=>{
        setArticleData({ ...articleData, [event.target.name]: event.target.value });
       }
   return(
    <>
  <MyNavbar />
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={articleData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={articleData.desc}
              name="desc"
              onChange={formHandler}
              type="text"
              placeholder="یک توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={articleData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={articleData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder=" موضوع مقاله وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={articleData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder=" آدرس عکس مقاله وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> مدت زمان خواندن</Form.Label>
            <Form.Control
              value={articleData.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="number"
              placeholder=""
            />
          </Form.Group>
          <Button onClick={editArticleHandler} variant="primary">
            ویرایش مقاله
          </Button>
        </Form>
      </div>
    </>
   )
}

export default EditArticle;