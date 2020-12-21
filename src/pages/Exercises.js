import React from 'react';
import ReactDom from "react-dom";
import Card from '../components/Card';
import Welcome from '../components/Welcome';

class Exercises extends React.Component {

    render() {
        return (
            <div>
                <Welcome
                    userName="Jeyver Vegas" />

                <Card
                    img="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
                    title="Este es mi componente."
                    description="descripcion en un parrafo."
                    primaryColor="#A74CF2"
                    secondaryColor="#617BFB" />
            </div>
        )
    }

}

export default Exercises;