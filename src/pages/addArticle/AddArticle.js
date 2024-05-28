import MyNavbar from "../../components/navbar/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
function AddArticle() {
  // const [titleState , setTitleState] = useState('')
  // const [descState , setDescState] = useState('')
  // const [writterState , setWritterState] = useState('')
  // const [categoryState , setCategoryState] = useState('')
  // const [imageState , setImageState] = useState('')
  // const [readingTimeState , setReadingTimeState] = useState('')
  const [formData, setformDataState] = useState({});
  const resetFormData = () => {
    setformDataState({
      title: "",
      desc: "",
      writter: "",
      category: "",
      image: "",
      readingTime: "",
    });
  };
  const formHandler = (e) => {
    setformDataState({ ...formData, [e.target.name]: e.target.value });
  };
  // const titleInputHanlder = (e) => {
  //     setTitleState(e.target.value)
  // }
  // const descInputHanlder = (e) => {
  //     setDescState(e.target.value)
  // }
  // const writterInputHanlder = (e) => {
  //     setWritterState(e.target.value)
  // }
  // const categoryInputHanlder = (e) => {
  //     setCategoryState(e.target.value)
  // }
  // const imageInputHanlder = (e) => {
  //     setImageState(e.target.value)
  // }
  // const readingTimeInputHanlder = (e) => {
  //     setReadingTimeState(e.target.value)
  // }
  const addArticleHandler = () => {
    // axios.post('http://localhost:5000/articles' , {
    //     title : titleState,
    //     desc : descState,
    //     writter : writterState,
    //     category : categoryState,
    //     image : imageState,
    //     readingTime : 55
    // } )
    axios
      .post("http://localhost:5000/article", formData)
      .then((respose) => {
        if (200 <= respose.status < 300) {
          Swal.fire({
            title: "مقاله با موفقیت ساخته شد",
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: true,
            icon: "success",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "مقاله ساخته نشد",
          timer: 10000,
          timerProgressBar: true,
          showConfirmButton: true,
          icon: "error",
        });
      });
    resetFormData();
  };

  return (
    <>
      <MyNavbar />
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={formData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={formData.desc}
              name="desc"
              onChange={formHandler}
              type="text"
              placeholder="یک توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={formData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={formData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder=" موضوع مقاله وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={formData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder=" آدرس عکس مقاله وارد کنید"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> مدت زمان خواندن</Form.Label>
            <Form.Control
              value={formData.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="number"
              placeholder=""
            />
          </Form.Group>
          <Button onClick={addArticleHandler} variant="primary">
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddArticle;
