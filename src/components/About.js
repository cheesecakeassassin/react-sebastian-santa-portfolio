import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="four columns" style={{paddingTop: '50px'}}>
                        <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                    </div>

                    <div className="eight columns main-col">
                        <h2>
                            About Me{' '}
                            <span role="img" aria-label="palm tree">
                                🌴
                            </span>
                        </h2>
                        <p>
                            I'm currently a senior at Florida International University and pursuing my Bachelor's in
                            Computer Science for the end of Fall 2022. I'm a recent Full-Stack Web Development graduate from Rutgers
                            Coding Bootcamp. American-born but also proud of my Colombian ancestry!
                        </p>
                        <p>
                            Skills in Java, Kotlin, Python, C#, C, JavaScript, React.js, Vue 3, object-oriented programming, and Scrum development and
                            strengths in adapting to new frameworks and languages. Passionate about writing clean code,
                            debugging applications, and innovating solutions with outside-the-box thinking.
                        </p>
                        <p>Find out more below!</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;