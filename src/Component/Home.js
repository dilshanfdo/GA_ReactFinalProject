import { Col, Container, Row, Image } from "react-bootstrap";
import { useHistory } from "react-router";

import latest from '../Images/latest.jpg';
import popular from '../Images/popular.jpg';

function Home() {

    const history = useHistory();

    function handleClick( text ){
        if( text === 'popular' ){
            history.push( "/cocktail/popular" );
        } else {
            history.push( "/cocktail/latest" );
        }

    }

    return (
        <div className="home">
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm={5}>
                        <div onClick={ () => handleClick('popular')}>
                            <Image src={popular} alt="logo" />
                            <h5>Popular Drinks</h5>
                        </div>
                    </Col>
                    <Col sm={5}>
                        <div onClick={ () => handleClick('latest')}>
                            <Image src={latest} alt="logo" />
                            <h5>Latest Drinks</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;