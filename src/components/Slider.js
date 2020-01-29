import React, { useState } from 'react';
import '../css/slider.css';
import ImgAndDescrip from '../components/ImgAndDescrip';
import ButtonsComp from '../components/ButtonsComp';

import leftArrow from '../pics/left-arrow.png';
import rightArrow from '../pics/right-arrow.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Server Images
let img1 = 'https://images.unsplash.com/photo-1575819719798-83d97dd6949c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
let img2 = 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
let img3 = 'https://images.unsplash.com/photo-1543038935-305c957b454c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80';
let img4 = 'https://images.unsplash.com/photo-1570514333207-f753a6ba38b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80';
let img5 = 'https://images.unsplash.com/photo-1508764918591-0536ff94fb36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
let img6 = 'https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80';
let img7 = 'https://images.unsplash.com/photo-1496088789575-149c94104db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';

// Seven Natural Wonders information stored in arrays
let descrip1 = ["Mount Everest", "The highest mountain in the world reaches 29,029 feet in the Himalaya Mountains on the border between Nepal and Tibet. Guided flights of Mount Everest can take you around the mountain, while the more adventuresome will want to hike to the base of the mountain."];
let descrip2 = ["Harbour of Rio de Janeiro", "This bay in Rio de Janeiro, Brazil, is surrounded by mountains and is the largest bay in the world based on the volume of water. Also known as Guanabara Bay, the harbor features granite monolith mountains such as Sugar Loaf Mountain at 1,296 feet, Corcovado Peak at 2,310 feet and the hills of Tijuca at 3,350 feet. Get up high to take in the entire harbor or visit one of the islands that dot the bay."];
let descrip3 = ["The Great Barrier Reef", "Spanning 133,000 square miles, the Great Barrier Reef is the largest coral reef system in the world and contains more than 2,900 separate reefs, 900 islands and supports one of the most diverse eco-systems in the world. The stretch of 1,600 miles can be seen from outer space. Located in the Coral Sea off the coast of Queensland in northeastern Australia, the best way to see it is by snorkeling or scuba diving for a view of the fish, coral and marine life."];
let descrip4 = ["Victoria Falls", "This waterfall in southern Africa borders Zambia and Zimbabwe. Victoria Falls is one mile wide and 360 feet high, making it the largest waterfall in the world. The falls are bordered by natural parks in both countries. A view of the falls gives you a chance to see hippos, elephants and other “Big 5” wildlife along the way."];
let descrip5 = ["Paricutin Volcano", "This active volcano in Michoacan, Mexico, is the youngest in North America. The 9,101-foot cinder cone volcano last erupted in 1952 and is the first birth of a volcano witnessed by humans. Within its first year, it reached three-fourths of its current size. A 12-mile trip around the top of volcano can be done by hiking or horseback."];
let descrip6 = ["Grand Canyon", "This massive gorge in Arizona created by the Colorado River spans 277 miles with widths from four to 18 miles and a depth of one mile. Most is contained within Grand Canyon National Park. Perhaps the best way to see it is from the South Rim."];
let descrip7 = ["Aurora Borealis", "These naturally occurring lights put on a display in the skies above the magnetic poles. Also known as the Northern Lights, the Aurora Borealis appear as diffused lights glowing in the horizon and sometimes as waves. The closer you get to the Arctic Circle, the better the view."];


function Slider() {

    //Array for images
    let sliderArr = [
        <ImgAndDescrip src={img1} title={descrip1[0]} description={descrip1[1]} />,
        <ImgAndDescrip src={img2} title={descrip2[0]} description={descrip2[1]} />,
        <ImgAndDescrip src={img3} title={descrip3[0]} description={descrip3[1]} />,
        <ImgAndDescrip src={img4} title={descrip4[0]} description={descrip4[1]} />,
        <ImgAndDescrip src={img5} title={descrip5[0]} description={descrip5[1]} />,
        <ImgAndDescrip src={img6} title={descrip6[0]} description={descrip6[1]} />,
        <ImgAndDescrip src={img7} title={descrip7[0]} description={descrip7[1]} />
    ]

    // Using hooks
    const [x, setX] = useState(0);
    const [wondersArr] = useState([
        "Mount Everest",
        "Harbour of Rio de Janeiro",
        "Great Barrier Reef",
        "Victoria Falls", "Paricutin Volcano",
        "Grand Canyon",
        "Aurora Borealis"
    ]);
    const [prevWonder, setPrevWonder] = useState(wondersArr[6]);
    const [nextWonder, setNextWonder] = useState(wondersArr[1]);


    const goLeft = () => {
        if (x === 0) {
            setX(-100 * (sliderArr.length - 1))
        } else {
            setX(x + 100)
        }
        prevWonderFunc();


    };
    const goRight = () => {

        // slider.length was used so that the input can be dynamic
        if (x === -100 * (sliderArr.length - 1)) {
            setX(0)
        } else {
            setX(x - 100)
        };
        nextWonderFunc();
    }

    let prevWonderFunc = () => {

        if (x === 0) {
            setPrevWonder(wondersArr[5]);
            setNextWonder(wondersArr[0]);
        } else if (x === -100) {
            setPrevWonder(wondersArr[6]);
            setNextWonder(wondersArr[1]);
        } else if (x === -200) {
            setPrevWonder(wondersArr[0]);
            setNextWonder(wondersArr[2]);
        } else if (x === -300) {
            setPrevWonder(wondersArr[1]);
            setNextWonder(wondersArr[3]);
        } else if (x === -400) {
            setPrevWonder(wondersArr[2]);
            setNextWonder(wondersArr[4]);
        } else if (x === -500) {
            setPrevWonder(wondersArr[3]);
            setNextWonder(wondersArr[5]);
        } else if (x === -600) {
            setPrevWonder(wondersArr[4]);
            setNextWonder(wondersArr[6]);
        }
    }

    let nextWonderFunc = () => {

        if (x === 0) {
            setPrevWonder(wondersArr[0]);
            setNextWonder(wondersArr[2]);
        } else if (x === -100) {
            setPrevWonder(wondersArr[1]);
            setNextWonder(wondersArr[3]);
        } else if (x === -200) {
            setPrevWonder(wondersArr[2]);
            setNextWonder(wondersArr[4]);
        } else if (x === -300) {
            setPrevWonder(wondersArr[3]);
            setNextWonder(wondersArr[5]);
        } else if (x === -400) {
            setPrevWonder(wondersArr[4]);
            setNextWonder(wondersArr[6]);
        } else if (x === -500) {
            setPrevWonder(wondersArr[5]);
            setNextWonder(wondersArr[0]);
        } else if (x === -600) {
            setPrevWonder(wondersArr[6]);
            setNextWonder(wondersArr[1]);
        }
    }

    return (
        <Container fluid={true}>
            <Row>
                <Col className="information">
                    <h1 id="title">The 7 Natural Wonders of the World</h1>
                    <div className="infoDiv">
                        <p className="para">While ancient and modern works of architecture fill the lists of the Seven Wonders of the World,
                            there are sites of natural beauty that are worth discovery. The Seven Natural Wonders organization
                    came up with its own list to raise awareness of and protect the beauty of the natural places.</p>

                        <div>
                            <p className="sub-title"><u>Below are links to find out more about the 7 Natural Wonders:</u></p>
                            <ul className="lists">
                                <li><a className="links" href="https://en.wikipedia.org/wiki/Mount_Everest" target="_blank" rel="noopener noreferrer">Mount Everest</a></li>
                                <li><a className="links" href="https://en.wikipedia.org/wiki/Guanabara_Bay" target="_blank" rel="noopener noreferrer">Harbour of Rio de Janeiro</a></li>
                                <li><a className="links" href="https://en.wikipedia.org/wiki/Great_Barrier_Reef" target="_blank" rel="noopener noreferrer">Great Barrier Reef</a></li>
                                <li><a className="links" href="https://en.wikipedia.org/wiki/Victoria_Falls,_Zambia" target="_blank" rel="noopener noreferrer">Victoria Falls</a></li>
                                <li><a className="links" href="https://en.wikipedia.org/wiki/Par%C3%ADcutin" target="_blank" rel="noopener noreferrer">Paricutin Volcano</a></li>
                                <li><a className="links" href="https://en.wikipedia.org/wiki/Grand_Canyon" target="_blank" rel="noopener noreferrer">Grand Canyon</a></li>
                                <li><a className="links" href="https://en.wikipedia.org/wiki/Aurora" target="_blank" rel="noopener noreferrer">Aurora Borealis</a></li>
                            </ul>
                        </div>

                        <div>
                            <p className="sub-title"><u>References:</u></p>
                            <ul className="lists">
                                <li><a className="links" href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">unsplash</a></li>
                                <li><a className="links" href="https://www.iexplore.com/experiences/world-wonders/explore-the-seven-natural-wonders-of-the-world" target="_blank" rel="noopener noreferrer">Iexplore</a></li>
                            </ul>
                        </div>
                    </div>

                </Col>
                <Col>
                    <Container fluid={true}>
                        <Row>
                            <Col className="imgCol">
                                <div className="slider">
                                    {
                                        sliderArr.map((item, index) => {
                                            return (
                                                <div key={index} className="slide" style={{ transform: `translateX(${x}%` }}>
                                                    {item}
                                                </div>
                                            );
                                        })
                                    }
                                    <button id="goLeft" className="btn-styles" onClick={goLeft}>
                                        <div className="arrowDiv">
                                            <img src={leftArrow} alt="leftArrow" className="arrows" />
                                        </div>

                                    </button>
                                    <button id="goRight" className="btn-styles" onClick={goRight}>
                                        <img src={rightArrow} alt="rightArrow" className="arrows" />
                                    </button>

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="btnDiv">
                                    <ButtonsComp goLeft={goLeft} prevWonder={prevWonder} goRight={goRight} nextWonder={nextWonder} />
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </Col>
            </Row>
        </Container>

    )
};


export default Slider;