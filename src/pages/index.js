import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

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
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Astrology</h3>
                                <p>natal charts, Planetary Remediation</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Rapeh Ceremonies</h3>
                                <p>Heal with the plant spirits</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Tarot Readings</h3>
                                <p>Got a question? Let's try some divination.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Magick Now</h3>
                                <p>A crash course in magical knowledge.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Intuitive and Spiritual Counseling</h3>
                                <p>Chats about and support for your life.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Hello, I am Russell Wells and I am here to help you evolve.</h2>
                            </header>
                            <p>I am an energy worker and intuitive healer. I am initiated into the healing art of Reiki in the Usui lineage. I practice the magic of the Western Esoteric Tradition among others. I am passionate about helping others stand in their fullest expression. I am now offering energy work sessions. Lay on the table and relax as your energetic system is supported and restored. Uncover and discover inner solutions to your pains and problems. I am based in Encinitas, San Diego, California. I have spaces open for weekly clients. New to energy work? Let's connect and discover how I can be of service to your growth.</p>
                            <ul className="actions">
                                <li><Link to="#two" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex