import React from "react";
import Card from "./Card";

const ExercisesList = ({exercises}) => (
    <div>
        {exercises.map((exercise) => {
            return (
                <Card
                    key={exercise.id}
                    img={exercise.img}
                    title={exercise.title}
                    description={exercise.description}
                    primaryColor={exercise.leftColor}
                    secondaryColor={exercise.rightColor} />
            )
        })}
    </div>
)

export default ExercisesList;