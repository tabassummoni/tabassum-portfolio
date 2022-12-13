import React, { Component } from 'react';
import classes from './Traininng.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Traininng extends Component {
    render() {
        return (
            <div className={classes.box} id="traininng">
                <span className={classes.head}>MY Training</span>
                <h2 className='font-bold  text-fuchsia-900' style={{ marginLeft: 30 , color : '#808080' , letterSpacing:5 ,fontWeight:700,lineHeight :1.8, fontSize: 18}}>Where I learned Programming </h2>
                 <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                   
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>

                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Web Development<span></span></h2>
                                                    <p> Programming Hero </p>
                                                    <p>(6 Month)</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >JEE Programming </h2>
                                                    <p>IBCS-PRIMAX LTD</p>
                                                    <p>(3 Month) </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        


                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>

        )
    }
}

export default Traininng;
