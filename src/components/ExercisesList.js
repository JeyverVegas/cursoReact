import React from "react";
import Card from "./Card";

function ExercisesList(props) {
    return (
        <div>
            {props.exercises.map((exercise) => {
                return (
                    <Card
                        img={exercise.img}
                        title={exercise.title}
                        description={exercise.description}
                        primaryColor={exercise.leftColor}
                        secondaryColor={exercise.rightColor} />
                )
            })}
        </div>
    )
}

export default ExercisesList;