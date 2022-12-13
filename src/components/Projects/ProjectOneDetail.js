import React, { Component } from 'react';
import project1 from './../../components/images/projectsAllImages/project1(1).jpg'
import project2 from './../../components/images/projectsAllImages/project1(2).png'
import project3 from './../../components/images/projectsAllImages/project1(3).jpg'
import project4 from './../../components/images/projectsAllImages/projects1(4).jpg'
import project5 from './../../components/images/projectsAllImages/projects1(5).jpg'
import project6 from './../../components/images/projectsAllImages/projects1(6).png'
import classes from '../carousel/CarouselImages.module.css'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';


class ProjectOneDetail extends Component {
    render() {
        return (
            <div className='d-flex'>
                <div className={classes.carousel_container} id="start">
                    {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
                    <Carousel className={classes.carousel} width={'50%'} dynamicHeight infiniteLoop={true} interval={6000} useKeyboardArrows={true} transitionTime={1700} emulateTouch showArrows={true} autoPlay showStatus={true} showThumbs={true} >
                        <div className={classes.image_container} >
                            <img className={classes.imageProjects} src={project1} alt="myImage" />
                            <div className={classes.h1Projects}>
                                <h1 >Homepage</h1>
                            </div>
                        </div>
                        <div className={classes.image_container}>
                            <img className={classes.imageProjects} src={project2} alt="myImage" />
                            <div className={classes.h1Projects}>

                            </div>
                        </div>
                        <div className={classes.image_container}>
                            <img className={classes.imageProjects} src={project3} alt="myImage" />
                            <div className={classes.h1Projects}>

                            </div>
                        </div>
                        <div className={classes.image_container}>
                            <img className={classes.imageProjects} src={project4} alt="myImage" />
                            <div className={classes.h1Projects}>

                            </div>
                        </div>

                    </Carousel>

                </div>
                <div className='justify-center text-center'>
                    <p> <span className='font-bold'>Uses Component  : <p> React js , BootStrap</p> </span></p>
                </div>

            </div>
        )
    }
};

export default ProjectOneDetail;