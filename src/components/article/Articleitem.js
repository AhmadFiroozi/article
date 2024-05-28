import { CardFooter } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { TiArrowLeftThick } from "react-icons/ti";
import { MdOutlineAccessTime } from "react-icons/md";
import './Articleitem.css'
import { Link } from "react-router-dom";
function Articleitem(props) {
    return ( 
        <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title className="py-2">{props.title}</Card.Title>
          <Card.Text>
         {props.desc}
          </Card.Text>
        <Link to={`/article/${props.id}`}>
        <span className="read-more">
            <span>ادامه مقاله</span>
            <TiArrowLeftThick size='25px' />
          </span>
        </Link>
        </Card.Body>
        <CardFooter className="d-flex justify-content-between align-items-center py-3">
         <span>نویسنده مقاله:{props.writter}</span>
         <span><MdOutlineAccessTime /> {props.readingTime} دقیقه</span>
        </CardFooter>
      </Card>
     );
}

export default Articleitem;