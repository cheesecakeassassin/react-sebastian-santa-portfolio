import React, { Component } from 'react'
export default class Skills extends Component {
    render() {
        let resumeData = this.props.resumeData
        return (
            <section id="skills">
                <div className="row skill">
                    <div className="one columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>

                    <div className="eleven columns main-col">
                        <div>
                            <div className="skills" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                                {resumeData.skills &&
                                    resumeData.skills.map((item) => {
                                        return (
                                            <div style={{ padding: '15px 15px 15px 15px', textAlign: 'center'}}>
                                                <i className={`devicon-${item.skillname.toLowerCase()}-plain colored`} style={{ fontSize: '100px' }}></i>
                                                <h2>{ item.realName || item.skillname }</h2>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
