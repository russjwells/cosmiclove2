import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/hands.jpg'
import pic02 from '../assets/images/space02.jpg'
import pic03 from '../assets/images/gunungsindoro.jpg'
import pic04 from '../assets/images/ball.jpg'
import pic05 from '../assets/images/candlesandpumpkins.jpg'
import pic06 from '../assets/images/space06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Cosmic Love Energy Healing"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'energy work, healing' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Energy Work</h3>
                                <p>Energy healing & cord cutting</p>
                            </header>
                            <Link to="#two" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Astrology</h3>
                                <p>Planetary Remediation & natal charts</p>
                            </header>
                            <Link to="#two" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Spiritual Counseling</h3>
                                <p>support for your life</p>
                            </header>
                            <Link to="#two" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Divination</h3>
                                <p>Tarot & intuitive readings</p>
                            </header>
                            <Link to="#two" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Hello, I am Russell Wells</h2>
                            </header>
                            <p>I am here to help you evolve. I am an energy worker and intuitive healer. I am initiated into the healing art of Reiki in the Usui lineage. I practice the magic of the Western Esoteric Tradition among others. I am passionate about helping others stand in their fullest expression. I am now offering energy work sessions. Lay on the table and relax as your energetic system is supported and restored. Uncover and discover inner solutions to your pains and problems. I am based in Encinitas, California. New to energy work? Let's connect and discover how I can be of service to your growth.</p>
                            <ul className="actions">
                                <li><Link to="#contact" className="button next">Send me a message</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex