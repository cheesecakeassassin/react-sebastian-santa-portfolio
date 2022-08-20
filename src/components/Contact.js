import React, { Component } from 'react'
export default class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">Feel free to contact me for any inquires!</p>
                    </div>
                </div>
                <div className="row">
                    <aside className="eigth columns footer-widgets">
                        <div className="widget">
                            <h4>
                                Email:
                                <a href="mailto:santa.sebastian@outlook.com"> santa.sebastian@outlook.com</a>
                            </h4>
                            <h4>
                                Phone #: <a href="tel:786-566-3177" cm_dontconvertlink>(786)566-3177</a>
                            </h4>
                        </div>
                    </aside>
                </div>
            </section>
        )
    }
}
