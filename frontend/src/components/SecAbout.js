import React, { useState } from 'react';
function SecAbout() {

    return (


        <div class="bodyabout">

            <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <div class="containerabout">
                <h1>About <span class="highlightabout">ArtsyMe</span></h1>
                <p class="centerkanabout">About ArtsyMe</p>
                <section class="about">
                    <p>
                        This site points to form it simpler for creators to distribute their works of craftsmanship broadly. By centering on alluring visual plan, and looking for to extend the reach of their work and make modern work openings. We are committed to giving leading-edge arrangements and supporting originators with progressed innovation and inventive highlights and plans. Fulfill client calls to appreciate extraordinary highlights for you as a realistic originator who needs a part-time work that's straightforwardly coordinates with clients.
                    </p>

                    <img
                        src="../images/imageabout.png"
                        alt="Group of people"
                        style={{ marginBottom: '20px' }}
                    />
                </section>
                <p class="centerkanabout">Features</p>

                <section class="features">
                    <div class="feature">
                        <img src="../icon/iconabout1.png" alt="More Design" />
                        <h2 style={{ fontWeight: 'bold', textAlign: 'left' }}>More Design</h2>
                        <p>We have many interesting designs that suit the user's wishes.</p>
                    </div>
                    <div class="feature">
                        <img src="../icon/iconabout2.png" alt="Get a Job" />
                        <h2 style={{ fontWeight: 'bold', textAlign: 'left' }}>Get a Job</h2>
                        <p>Users can get jobs that suit their skills and look for workers on this website.</p>
                    </div>
                    <div class="feature">
                        <img src="../icon/iconabout3.png" alt="Dark Mode" />
                        <h2 style={{ fontWeight: 'bold', textAlign: 'left' }}>Dark Mode</h2>
                        <p>By implementing dark mode on the website, users will feel more comfortable when using this website.</p>
                    </div>
                    <div class="feature">
                        <img src="../icon/iconabout4.png" alt="User Friendly" />
                        <h2 style={{ fontWeight: 'bold', textAlign: 'left' }}>User Friendly</h2>
                        <p>User friendly will make it easier for new users to use the website.</p>
                    </div>
                </section>
            </div>
            <div class="containerabout">
                <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Join Our Team</h2>
                <div class="globe">
                    <img
                        src="./images/imageglobe.png"
                        alt="Globe"
                        style={{ display: 'block', margin: '0 auto', marginBottom: '10px' }}
                    />
                </div>
                <p class="description">
                    Since we are a 100% distributed team, you can work from anywhere. No need to move for a job. We are proud of a culture of communication, collaboration, trust, and kindness.
                </p>
            </div>


        </div>


    )
}

export default SecAbout;