import React from 'react';
import BookSearch from '../../assets/booksearch.png'
import CodeQuiz from '../../assets/codequiz.png'
import Dashboard from '../../assets/dashboard.png'
import Database from '../../assets/database.png'
import Planner from '../../assets/planner.png'
import Generator from '../../assets/generator.png'


export default function Portfolio() {
    return (
        <div>
            <h1>My Portfolio</h1>
            <section className='box'>
                <h1>MERN Book Search</h1>
                    <a href="https://dylans-book-search-app.herokuapp.com" >
                        <img src = {BookSearch} alt ="Book Search App"></img>
                    </a>
            </section>
            <section>
                <h1>Code Quiz</h1>
                    <a href="https://dylansantiago.github.io/Code-Quiz/" >
                        <img src = {CodeQuiz} alt ="Code Quiz"></img>
                    </a>
            </section>
            <section>
                <h1>Daily Planner</h1>
                    <a href="https://dylansantiago.github.io/Work-Day-Planner/" >
                        <img src = {Planner} alt ="Work Day Planner"></img>
                    </a>
            </section>
            <section>
                <h1>Company Dashboard</h1>
                    <a href="https://github.com/DylanSantiago/Company-Contact-Dashboard" >
                        <img src = {Dashboard} alt ="Company Contact Dashboard"></img>
                    </a>
            </section>
            <section>
                <h1>Password Generator</h1>
                    <a href="https://dylansantiago.github.io/Password-Generator/" >
                        <img src = {Generator} alt ="Password Generator"></img>
                    </a>
            </section>
            <section>
                <h1>Employee Database</h1>
                    <a href="https://github.com/DylanSantiago/Employee-Tracker-Database" >
                        <img src = {Database} alt ="Employee Database"></img>
                    </a>
            </section>
           
            
        </div>
    )
}