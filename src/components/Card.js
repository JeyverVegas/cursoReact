import React from 'react';
import ReactDom from "react-dom";
import image1 from "../assets/images/workout1.png";
import circlesImg from "../assets/images/circles.png";
import "./styles/Card.css";

class Card extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            image: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                image: 'https://pngimg.com/uploads/pokemon/pokemon_PNG149.png'
            })
        }, 5000)       
    }

    render() {
        const { img, title, description, primaryColor, secondaryColor } = this.props;

        return (
            <div className="card mx-auto Fitness-Card" style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${primaryColor}, ${secondaryColor})`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="float-right img-card animate__animated animate__fadeIn" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;