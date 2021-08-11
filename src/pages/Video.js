import React from 'react'

function Video(prop) {
    return (
        <div class="video-section">
            <div class="container">
                <div class="iframe-container">
                    <iframe src="https://www.youtube.com/embed/Q33KBiDriJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Video
