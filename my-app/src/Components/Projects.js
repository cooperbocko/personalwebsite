import './Projects.css'
import Image from '../Assets/Image';

function Projects() {
    return (
        <div>
            <h1>projects</h1>
            <ul>
                <li>
                    <div class="card">
                        <div class="container">
                            <h1>Absque</h1> 
                            <img src={require('../Assets/absque.png')}/>
                            <p>Fullstack development using React, Node.js, and MongoDb to create a Reddit-like blog site where users can view others' posts as well as create, edit, and delete their own posts.</p> 
                        </div>
                    </div>
                </li>
            </ul>  
        </div>
    )
}

export default Projects;