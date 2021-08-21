import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { ContentContext } from '../contexts/ContentContext';
import app from "../firebase";
function Interests() {
    let db = app.firestore();
    let history = useHistory();
    const [selectedInterest, setSelectedInterest] = useState('')
    const {getContent} = useContext(ContentContext);
    const handleSelectedInterest = (e) => {
        setSelectedInterest(e.target.id)
    }

    const handleSubmit = async () => {
        let data = await getContent(selectedInterest);
        if(data !== null ) {
            console.log("From interest", data)
            await localStorage.setItem(selectedInterest, JSON.stringify(data));
            history.push(`/dashboard/${selectedInterest}`);
        }
        else {
            console.log("No data")
        }
    }

    return (
        <div class="container mt-5">
            <h1>Select your Interest</h1>
            <div class="interest-container">
                <div class="interests">
                    <div class="interest3" id="Graphics Designing" onClick={handleSelectedInterest}>
                        <img id="Graphics Designing" src="https://image.flaticon.com/icons/png/512/2919/2919500.png" alt="" />
                        <h4 id="Graphics Designing" >Graphics Designing</h4>
                    </div>
                    <div class="interest3" onClick={handleSelectedInterest}>
                        <img src="https://image.flaticon.com/icons/png/512/2103/2103620.png" alt="" />
                        <h4>Machine Learning</h4>
                    </div>
                    <div class="interest3 choosen" id="Web Development" onClick={handleSelectedInterest}>
                        <img id="Web Development" src="https://image.flaticon.com/icons/png/512/1336/1336494.png" alt="" />
                        <h4 id="Web Development">Web Development</h4>
                    </div>
                    <div class="interest3" onClick={handleSelectedInterest}>
                        <img src="https://image.flaticon.com/icons/png/512/1658/1658936.png" alt="" />
                        <h4>Content Writing</h4>
                    </div>
                    <div class="interest3" onClick={handleSelectedInterest}>
                        <img src="https://image.flaticon.com/icons/png/512/1336/1336494.png" alt="" />
                        <h4>Canva</h4>
                    </div>
                    <div class="interest3" onClick={handleSelectedInterest}>
                        <img src="https://image.flaticon.com/icons/png/512/1336/1336494.png" alt="" />
                        <h4>Excel</h4>
                    </div>
                    <div class="interest3" onClick={handleSelectedInterest}>
                        <img src="https://image.flaticon.com/icons/png/512/1336/1336494.png" alt="" />
                        <h4>Digital Marketing</h4>
                    </div>
                    <div class="interest3" onClick={handleSelectedInterest}>
                        <img src="https://image.flaticon.com/icons/png/512/1336/1336494.png" alt="" />
                        <h4>PowerPoint</h4>
                    </div>
                </div>
            </div>
            <div class="btn btn-primary mt-4" onClick={handleSubmit}>Continue</div>
        </div>
    )
}

export default Interests
