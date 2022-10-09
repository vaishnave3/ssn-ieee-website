import React from 'react';
import faculty from '../../assets/faculty0.jpg';
import chair from '../../assets/Chair.jpg'
import Secretary from '../../assets/Secretary.jpg'
import Treasurer from '../../assets/Treasurer.jpg'
import Vicechair from '../../assets/Vice_Chair.jpg'
import jointsec from '../../assets/Joint_Secretary.jpg'
import './body.css';

const Body = () => {
    return (
        <section id="body">
            <h1>Our SSN IEEE Members</h1>
            <div className="container body__header">
                <div className="ieee_faculties">
                    <h2>Faculty Members</h2>
                    <div className="faculty__card">
                        <img src={faculty} alt="faculty" className="facultyimg" />
                        <h3>T Sharmila</h3>
                        <h4>Faculty Incharge</h4>
                    </div>
                </div>
                <div className="core__members">
                    <h2>IEEE CS Core Members</h2>
                    <div className="members__list">
                        <article className="member__card">
                            <img src={chair} alt="Chair" className='img' />
                            <h3>Anni Priscilla</h3>
                            <h5>Chair</h5>
                        </article >
                        <article className="member__card">
                            <img src={Vicechair} alt="Vice Chair" className='img' />
                            <h3>Karthik Raja A</h3>
                            <h5>Vice Chair</h5>
                        </article >
                        <article className="member__card">
                            <img src={Secretary} alt="Secretary" className='img' />
                            <h3>Shreya</h3>
                            <h5>Secretary</h5>
                        </article>
                        <article className="member__card">
                            <img src={jointsec} alt="Joint Secretary" className="img" />
                            <h3>Nusaiba Afsheen</h3>
                            <h5>Joint Secretary</h5>
                        </article>
                        <article className="member__card">
                            <img src={Treasurer} alt="Treasurer" className="img" />
                            <h3>Anirudh A</h3>
                            <h5>Treasurer</h5>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Body;