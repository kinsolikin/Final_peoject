import React, { useState } from 'react';

function Viw() {
    const [publishDate] = useState(new Date()); // Inisialisasi state publishDate
    const [likes, setLikes] = useState(0); // State untuk jumlah likes
    const [comments, setComments] = useState(0); // State untuk jumlah comments
    const [fav, setFav] = useState(0); // State untuk jumlah favorites
    const [likeskomen, setLikeskomen] = useState(0);

    // Fungsi untuk memformat waktu menjadi "x weeks ago"
    const formatDate = (date) => {
        const diffInMs = Date.now() - date.getTime();
        const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
        return `${diffInWeeks} weeks ago`;
    };

    // Format waktu publikasi menjadi "x weeks ago"
    const formattedDate = formatDate(publishDate);
    // Fungsi untuk menangani klik tombol Like
    const handlefavClick = () => {
        setFav(fav + 1);
    };
    // Fungsi untuk menangani klik tombol Like
    const handleLikeClick = () => {
        setLikes(likes + 1);
    };

    // Fungsi untuk menangani klik tombol Comment
    const handleCommentClick = () => {
        setComments(comments + 1);
    };
    const handleLikeClickkomen = () => {
        setLikeskomen(likeskomen + 1);
    };

    return (
        <section class="viewbody">

            <div class="containerview">
                <div class="main-content">


                    <img src="/images/imageview1.png" alt="Visual Design Spiderman Home Coming" />
                    <div class="details">

                        <div className="actionsview mb-4">
                            <button className="btn btn-view"><i className="fas fa-star"></i> Add to favourite</button>
                            <button className="btn btn-view"><i className="fas fa-heart"></i> Like</button>
                            <button
                                className="btn btn-viewshare"
                                style={{
                                    backgroundColor: 'transparent',
                                    border: '2px solid #fff',
                                    color: '#fff',
                                    marginLeft: '50%',
                                    outline: 'none',
                                }}
                            >
                                <i className="fas fa-share" style={{ marginRight: '5px' }}></i> Share
                            </button>

                        </div>


                        <div className="inline" style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                            <img src="/images/imagevieworang.png" alt="by dominic martin" className="icon-view" />
                            <div style={{ marginLeft: '10px' }}>
                                <h1>
                                    Visual Design Spiderman Home Coming
                                    <span className="publish">
                                        Published: {formattedDate}
                                    </span>
                                </h1>
                                <p>by Dominik Martin</p>

                            </div>
                        </div>
                        <div className="interactionsview">
                            <div className="starview" onClick={handlefavClick}>
                                <i className="fas fa-star"></i>
                                <span>{fav} Favourites</span>
                            </div>
                            <div className="star2view" onClick={handleLikeClick}>
                                <i className="fas fa-heart"></i>
                                <span>{likes} Likes</span>
                            </div>
                            <div className="star2view" onClick={handleCommentClick}>
                                <i className="fas fa-comment"></i>
                                <span>{comments} Comments</span>
                            </div>
                        </div>


                        <div class="tagsview">
                            <button class="tag-btnview">Superheroes</button>
                            <button class="tag-btnview">Concept Art</button>
                            <button class="tag-btnview">Design Visual</button>
                            <button class="tag-btnview">Fantasy</button>
                            <button class="tag-btnview">Marvel</button>
                        </div>



                        <div class="comments">
                            <h2>Comments 102<span className="newst">Newst</span></h2>

                            <div class="tagsview">
                                <button class="tag-btnview">Hello, nice design!</button>
                                <button class="tag-btnview">Amazing</button>
                                <button class="tag-btnview">Wow</button>
                                <button class="tag-btnview">Interesting</button>
                                <button class="tag-btnview">Nice job, dude!</button>
                                <button class="tag-btnview">Excelent</button>
                                <button class="tag-btnview">ezpz lemon sequezy</button>
                                <button style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer', verticalAlign: 'middle' }}>
                                    <img src="/icon/icon.png" alt="icon" style={{ width: '40px', height: '40px', verticalAlign: 'middle' }} />
                                </button>
                            </div>


                            <div className="akunkomenview">
                                <img src="/images/imageprofil.png" alt="gambar profil" />
                                <div className="comment-boxview">
                                    <input type="text" placeholder="Add comment..." className="comment-inputview" />
                                    <button type="submit" className="submit-buttonview">
                                        <i className="fas fa-paper-plane"></i> {/* Ikon untuk mengirim */}
                                    </button>
                                </div>
                            </div>


                            <div class="icon2">
                                <img src="/icon/iconkomen2.png" alt="gambrprofil"></img>

                                <div class="commentview">
                                    <p class="username">Dominik Martin<span>21 hours ago</span></p>
                                    <p>I turned the sky in the background to that of the sky from the original Maximum Carnage posters / game cartridge. I also tried to keep the colors of the characters as faithful to what is seen in the Maximum Carnage game as possible without looking too cartoonish.</p>

                                </div>
                            </div>

                            <div className="replayview">
                                <i className="fas fa-comment"></i> {/* Ikon komentar */}
                                <span>Reply</span>
                                <i className="fas fa-heart" onClick={handleLikeClickkomen}></i> {/* Ikon hati */}
                                <span>{likeskomen}</span>{/* Menampilkan jumlah suka */}
                            </div>




                            <div class="icon3">
                                <img src="/icon/iconkomen2.png" alt="gambrprofil"></img>

                                <div class="commentview">
                                    <p class="username">Dominik Martin<span>21 hours ago</span></p>
                                    <p>I turned the sky in the background to that of the sky from the original Maximum Carnage posters / game cartridge. I also tried to keep the colors of the characters as faithful to what is seen in the Maximum Carnage game as possible without looking too cartoonish.</p>

                                </div>
                            </div>

                            <div className="replayview2" style={{ marginLeft: '80px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                                <i className="fas fa-comment" style={{ marginLeft: '100px', fontSize: '18px', verticalAlign: 'middle' }}></i>
                                <span style={{ marginRight: '5px', fontSize: '16px', lineHeight: '24px' }}>Reply</span>
                                <i className="fas fa-heart" onClick={handleLikeClickkomen} style={{ marginRight: '20px', fontSize: '18px', verticalAlign: 'middle' }}></i>
                                <span style={{ fontSize: '16px', lineHeight: '24px' }}>{likeskomen}</span>
                            </div>


                        </div>
                    </div>
                </div>

                <div class="sidebar">
                    <div class="section">
                        <h3>More by Dominik Martin<span class="view">view all</span></h3>
                        <div class="image-grid">
                            <img src="/images/imagesidebar1.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar2.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar3.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar4.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar5.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar6.png" alt="More by Dominik Martin" />
                        </div>
                    </div>
                    <div class="section">
                        <h3>More by Kristian Uyang<span class="view">view all</span></h3>
                        <div class="image-grid">
                            <img src="/images/imagesidebar7.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar8.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar9.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar10.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar11.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar12.png" alt="More by Dominik Martin" />
                        </div>
                    </div>
                    <div class="section">
                        <h3 class="secondary">Sugested Another Designer</h3>
                        <h3>More by Alexander De Capricorn<span class="view2">view all</span></h3>
                        <div class="image-grid">
                            <img src="/images/imagesidebar13.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar14.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar15.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar16.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar17.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar18.png" alt="More by Dominik Martin" />
                        </div>
                    </div>
                    <div class="section">
                        <h3>More by  Flat Man<span class="view3">view all</span></h3>
                        <div class="image-grid">
                            <img src="/images/imagesidebar13.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar14.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar15.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar16.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar17.png" alt="More by Dominik Martin" />
                            <img src="/images/imagesidebar18.png" alt="More by Dominik Martin" />
                            ``              </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Viw;