
import { Col } from "react-bootstrap";

export const WebCard = ({ name, tools, desc, screenshots, url }) => {
  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
  return (
    <Col className="pointerUrl" size={12} sm={6} md={4} onClick={()=>openInNewTab(url)}>
        <div className="proj-imgbx">
          <div className="proj-txtx">
            <h4>{name}</h4>
            <span>{desc}</span><br></br><br></br>
            <span>Tools: {tools}</span>
            {
              screenshots.map((imgUrl,i)=>{
                return<img key={i} src={process.env.PUBLIC_URL+imgUrl} alt="example"/>
              })
            }
          </div>
        </div>
    </Col>
  )
}
