import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Programming Languages</h2><br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <h5>Javscript</h5>
                            </div>
                            <div className="item">
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <h5>HTML</h5>
                            </div>
                        </Carousel><br></br><br></br> <br></br><br></br>
                        <h2>Tools</h2><br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h5>Firestore</h5>
                            </div>
                            <div className="item">
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <h5>Postman</h5>
                            </div>
                            <div className="item">
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <h5>Twilio API</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="BG" />
    </section>
  )
}
