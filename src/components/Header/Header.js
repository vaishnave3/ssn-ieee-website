import React from 'react';
import './header.css';
import SSNFountain from '../../assets/ssn.jpeg';
import IEEE from '../../assets/IEEE.png';
import SSN from '../../assets/ssn_logo_blue_transparent.png';

const Header = () => {
    return (
        <section id="header">
            <h1>Welcome to SSN IEEE</h1>
            <h2>About SSN</h2>
            <div className="header header__head">
                <div className="about__ssn">
                    <img src={SSNFountain} alt="ssn" className="ssn" />
                    <p className="about">
                        SSN Institutions, established by Mr. Shiv Nadar, Founder Chairman of
                        HCL Technologies, stand out as a premier center of higher learning
                        with a mission of pursuing excellence in education and research. The
                        institutions are named after the Chairman’s father, Sri
                        Sivasubramaniya Nadar. SSN Institutions are run by the SSN Trust
                        and, with their diverse and dynamic community of students offer a
                        distinctive combination of some of the finest graduate,
                        undergraduate and research programs, accomplished faculty, world
                        class facilities and a residential campus set on a sprawling 230
                        acres of sylvan surroundings. The Institutions provide a variety of
                        stimulating environments for intellectual development, free
                        thinking, and personal growth, challenging its students with dynamic
                        learning opportunities and equipping them with the skills, insights,
                        attitudes and practical experiences that are necessary to take up
                        responsibilities in the society.
                    </p>
                </div>
                <div className="about__ieee">
                    <h2>What do we do?</h2>
                    <h3 className="about__ieee_text">
                        The primary purpose of IEEE student branch is to Inspire, Enable,
                        Empower and Energize our student members to enhance their technical
                        interests by providing them a platform to showcase their skills
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Header;