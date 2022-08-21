import React, { Component } from 'react'

const lichessLink = 'lichess'
const loopArr = ['I am Sebastian Santa.', 'Yo soy Sebastián Santa.', '私はセバスチャンです。']

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0,
            interval: 0,
        }
    }

    componentDidMount() {
        const intervalDelayMilliseconds = loopArr[this.state.index].length * 250
        const newInterval = setInterval(() => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    index: prevState.index + 1 < loopArr.length ? prevState.index + 1 : 0,
                }
            })
        }, intervalDelayMilliseconds)

        this.setState((prevState) => {
            return {
                ...prevState,
                interval: newInterval,
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.interval)
    }

    render() {
        const resumeData = this.props.resumeData

        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                            Show navigation
                        </a>
                        <a className="mobile-btn" href="#" title="Hide navigation">
                            Hide navigation
                        </a>
                        <ul id="nav" className="nav">
                            <li className="current">
                                <a className="smoothscroll" href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#skills">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#portfolio">
                                    Works
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="row banner">
                        <div className="banner-text">
                            <div className="typewriter">
                                <h1 key={loopArr[this.state.index]}>{loopArr[this.state.index]}</h1>
                            </div>
                            <h3 style={{ color: '#fff', fontFamily: 'sans-serif' }}>
                                I am a {resumeData.role}. {resumeData.roleDescription}
                            </h3>
                            <hr />
                            <ul className="social">
                                {resumeData.socialLinks &&
                                    resumeData.socialLinks.map((item) => {
                                        return (
                                            <li key={item.name}>
                                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                    {item.name === lichessLink ? (
                                                        <svg
                                                            className={item.className}
                                                            viewBox="-0.692 0.5 51.573 52.285"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                        >
                                                            <path
                                                                d="M38.956.5c-3.53.418-6.452.902-9.286 2.984C5.534 1.786-.692 18.533.68 29.364 3.493 50.214 31.918 55.785 41.329 41.7c-7.444 7.696-19.276 8.752-28.323 3.084S-.506 27.392 4.683 17.567C9.873 7.742 18.996 4.535 29.03 6.405c2.43-1.418 5.225-3.22 7.655-3.187l-1.694 4.86 12.752 21.37c-.439 5.654-5.459 6.112-5.459 6.112-.574-1.47-1.634-2.942-4.842-6.036-3.207-3.094-17.465-10.177-15.788-16.207-2.001 6.967 10.311 14.152 14.04 17.663 3.73 3.51 5.426 6.04 5.795 6.756 0 0 9.392-2.504 7.838-8.927L37.4 7.171z"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        <i className={item.className} />
                                                    )}
                                                </a>
                                            </li>
                                        )
                                    })}
                            </ul>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about">
                            <i className="icon-down-circle" />
                        </a>
                    </p>
                </header>
            </React.Fragment>
        )
    }
}
