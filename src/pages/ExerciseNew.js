import React from "react";
import ExercisesForm from "../components/ExercisesForm";
import Card from "../components/Card";


class ExerciseNew extends React.Component {

    state = {
        form: {
            img: '',
            title: '',
            description: '',
            primaryColor: '',
            secondaryColor: ''
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Card
                            {...this.state.form} />
                    </div>
                    <div className="col-sm">
                        <ExercisesForm
                            onChange={this.handleChange}
                            form={this.state.form}
                        />
                    </div>
                </div>
            </div>
        )
    }


}



export default ExerciseNew;