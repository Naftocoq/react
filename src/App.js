import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel, Container, Nav, Navbar } from "react-bootstrap"
import { FaRegPlusSquare } from "react-icons/fa"
import slide1 from "./assets/slide1.png"
import slide2 from "./assets/slide2.png"
import slide3 from "./assets/slide3.png"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"
import card1 from "./assets/cards/Lizard.png"
import card2 from "./assets/cards/Humming bird.png"
import card3 from "./assets/cards/Butterfly.png"

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <div id="title">
              <h1 style={{ marginRight: "20px" }}>HIPPOCRATE</h1>{" "}
              <FaRegPlusSquare />
            </div>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="carouseldiv">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div className="carousel-image-container">
              <img
                className="carousel-image"
                src={slide1}
                alt="Rocky Mountains"
              />
            </div>
            <Carousel.Caption>
              <h5>Rocky Mountains</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image-container">
              <img className="carousel-image" src={slide2} alt="Toronto" />
            </div>
            <Carousel.Caption>
              <h5>Toronto</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image-container">
              <img className="carousel-image" src={slide3} alt="Vancouver" />
            </div>
            <Carousel.Caption>
              <h5>Vancouver</h5>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="cards">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            src
            image={card1}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card id="card-center" sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            src
            image={card2}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Humming bird
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Humming birds are a widespread group of squamate reptiles, with
              over 6,000 species, ranging across all continents except
              Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            src
            image={card3}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Butterfly
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Butterflies are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>

      <div style={{ height: "100px" }}></div>
    </div>
  )
}

export default App
