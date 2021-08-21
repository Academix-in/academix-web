import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

function Video(prop) {
    const {interestName, videoID} = useParams()
    const [video, setVideo] = useState('');
    let history = useHistory();

    useEffect(() => {
        let ref = localStorage.getItem(interestName)
        if(ref === null) {
            history.push('/404')
            return
        }
        // setData(JSON.parse(ref));
        let data = JSON.parse(ref)
        if(videoID >= data.content.length ) history.push('/404')

        setVideo(data.content[videoID])
    }, [interestName])

    return (
        <div class="video-section">
            <div class="container">
                <div class="iframe-container" dangerouslySetInnerHTML={{__html: video}}></div>
                    {/* <iframe src="https://www.youtube.com/embed/Q33KBiDriJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            </div>
        </div>
    )
}

export default Video
