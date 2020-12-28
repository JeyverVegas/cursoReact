import React from "react";
import addImage from "../assets/images/add.png";
import { Link } from "react-router-dom";

const AddExercise = () => (
    <div className="text-center mt-5">
        <Link to="/exercises/new">
            <img src={addImage} />
        </Link>
    </div>
)

export default AddExercise;