import React from 'react';
import { Link } from 'react-router-dom';
import project1 from './../../components/images/projectsAllImages/project1(1).jpg'
import project2 from './../../components/images/projectsAllImages/project2(1).jpg'
import project3 from './../../components/images/projectsAllImages/projects3(1).jpg'


const Projects = () => {
    return (
        <div>
             <h2 className='font-bold  text-fuchsia-900' style={{ marginLeft: 30 , color : '#808080' , letterSpacing:5 ,fontWeight:700,lineHeight :1.8, fontSize: 18}}>My Projects </h2>
            
            <div className='d-flex  '  id="project"> 
            <div className="card " id="pro1" style={{height:700, width : 300, marginLeft: 70}} >
                <figure ><img src={project1} alt="Shoes"  style={{height: 500,width:300}}/></figure>
                <div className="card-body">
                    <h2 className="card-title"style={{ marginLeft: 30 , color : '#0000FF',fontWeight:700,lineHeight :1.8, fontSize: 18 , textAlign:'center'}}>Resale Mart</h2>
                    <p><span style={{color:"#00BFFF"}}>React.js </span> 
                    <span style={{color:"#00BFFF"}}>Node.js </span>
                     <span style={{color:"#00BFFF"}}>Express.js </span> 
                     <span style={{color:"#00BFFF"}}>DaisyUI </span> 
                     <span style={{color:"#00BFFF"}}>Tailwind CSS </span> 
                     <span style={{color:"#00BFFF"}}>BootStrap </span> 
                     <span style={{color:"#00BFFF"}}>Firebase </span> 
                     <span style={{color:"#00BFFF"}}>MongoDB </span> 
                     <span style={{color:"#00BFFF"}}>React Hook </span> 
                     
                     </p>
                    <div className="card-actions justify-end">
                    <a href="https://final-assignment-980ad.web.app/" rel="opener noreferrer" target="_blank"><button className="btn btn-primary">Show</button></a>
                    </div>
                </div>
            </div>
            <div className="card " style={{height:700, width : 300, marginLeft: 30}}>
                <figure ><img src={project2} alt="Shoes"  style={{height: 500,width:300}}/></figure>
                <div className="card-body">
                    <h2 className="card-title"  style={{ marginLeft: 30 , color : '#0000FF',fontWeight:700,lineHeight :1.8, fontSize: 18}}>BTHQ Dental Care</h2>
                    <p><span style={{color:"#00BFFF"}}>React.js </span> 
                    <span style={{color:"#00BFFF"}}>Node.js </span>
                     <span style={{color:"#00BFFF"}}>Express.js </span> 
                     <span style={{color:"#00BFFF"}}>DaisyUI </span> 
                     <span style={{color:"#00BFFF"}}>Tailwind CSS </span> 
                     <span style={{color:"#00BFFF"}}>BootStrap </span> 
                     <span style={{color:"#00BFFF"}}>Firebase </span> 
                     <span style={{color:"#00BFFF"}}>MongoDB </span> 
                     
                     
                     </p>
                    <div className="card-actions justify-end">
                     <a href="https://assignment-11client.web.app/" rel="opener noreferrer" target="_blank"><button className="btn btn-primary">Show</button></a>
                    </div>
                </div>
            </div>
            <div className="card " style={{height:700, width : 300, marginLeft: 30}}>
                <figure ><img src={project3} alt="Shoes"  style={{height: 500,width:300}}/></figure>
                <div className="card-body">
                    <h2 className="card-title"style={{ marginLeft: 30 , color : '#0000FF',fontWeight:700,lineHeight :1.8, fontSize: 18 , textAlign:'center'}}>EduCity</h2>
                    <p><span style={{color:"#00BFFF"}}>React.js </span> 
                    <span style={{color:"#00BFFF"}}>Node.js </span>
                     <span style={{color:"#00BFFF"}}>DaisyUI </span> 
                     <span style={{color:"#00BFFF"}}>Tailwind CSS </span> 
                     <span style={{color:"#00BFFF"}}>BootStrap </span> 
                     <span style={{color:"#00BFFF"}}>Firebase </span>  
                     
                     </p>
                    <div className="card-actions justify-end">
                    <a href="https://assignment-11client.web.app/" rel="opener noreferrer" target="_blank"><button className="btn btn-primary" style={{textAlign:'center'}}>Show</button></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Projects;