import React, { useState } from "react";
import axios from "axios";
import TutorList from "./TutorList";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [proficiency, setProficiency] = useState('');
    const [sort, setSort] = useState('');
    const [matched, setMatched] = useState(null);
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const submitInfo = async(event) =>{
        event.preventDefault();
        // try{
        //     const urlString = `http://localhost:3003/tutors/searchTutor`;
        //     const result = await axios.get(urlString, {
        //         'startTime': startTime,
        //         'endTime': endTime,
        //         'subject': searchTerm,
        //         'proficiency': proficiency,
        //         'sort': sort
        //     })
        //     setMatched(result)
        //     console.log(result);
        //     return <TutorList matchedTutors = {matched} />   
        // }catch(e){
        //     console.log(e);
        // }
    }

    return (
        <form className="ui form" onSubmit={submitInfo}>
            <div className="field">
            <label>Search by Subject</label>
            <input
            type='text'
            placeholder='search for subject'
            value={searchTerm}
            onChange={handleChange}
            required
            />
            </div>
            
            <div className="row">


            <div className="col">Gryffindor </div>  
            <div className="col">Slytherin </div>  
            <div className="col">Ravenclaw </div>  
            <div className="col">Hufflepuff </div> 
            </div> 
            <br/>
            <button className="ui primary button" type='submit'>Search</button>
        </form>
    )

}

export default SearchBar;