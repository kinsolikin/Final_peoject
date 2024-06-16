import { Link } from 'react-router-dom'; // Import Link from React Router

function Exp() {
    return (
        <section className="explore">
            <div className="containerexplore">
                <h1>Explore your <span className="highlight">Design</span></h1>
                <div className="main-gallery">
                    {/* Link to ./view when images are clicked */}
                    <Link to="/view"><div className="image1"><img src="/images/imageexplore1.png" alt="AI Design 1" /></div></Link>
                    <Link to="/view"><div className="image1"><img src="/images/imageexplore2.png" alt="AI Design 2" /></div></Link>
                    <Link to="/view"><div className="image1"><img src="/images/imageexplore3.png" alt="AI Design 3" /></div></Link>
                </div>
                <div className="section">
                    <h2>Welcome to <span className="highlight1">Ai Desaign</span><Link to="#">View All</Link></h2>
                    <div className="section-gallery">
                        <Link to="/view"><div className="image1"><img src="/images/imageexplore4.png" alt="AI Design 1" /></div></Link>
                        <Link to="/view"><div className="image1"><img src="/images/imageexplore5.png" alt="AI Design 2" /></div></Link>
                        <Link to="/view"><div className="image1 "><img src="/images/imageexplore6.png" alt="AI Design 3" /></div></Link>
                    </div>
                </div>
                <div className="section">
                    <h2>Welcome to <span className="highlight">Superhero Design</span><Link to="#">View All</Link></h2>
                    <div className="section-gallery">
                        <Link to="/view"><div className="image1"><img src="/images/imageexplore7.png" alt="AI Design 1" /></div></Link>
                        <Link to="/view"><div className="image1"><img src="/images/imageexplore8.png" alt="AI Design 2" /></div></Link>
                        <Link to="/view"><div className="image1 "><img src="/images/imageexplore9.png" alt="AI Design 3" /></div></Link>
                    </div>
                </div>
                <div className="section">
                    <h2>Welcome to <span className="highlight">Concept Art Design</span><Link to="#">View All</Link></h2>
                    <div className="section-gallery">
                        <Link to="/view"><div className="image1"><img src="/images/imageexplore10.png" alt="AI Design 1" /></div></Link>
                        <Link to="/view"><div className="image1"><img src="/images/imageexplore11.png" alt="AI Design 2" /></div></Link>
                        <Link to="/view"><div className="image1 "><img src="/images/imageexplore12.png" alt="AI Design 3" /></div></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Exp;
