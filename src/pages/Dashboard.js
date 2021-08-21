import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ContentContext } from '../contexts/ContentContext';

function Dashboard() {
    let history = useHistory();
    const [data, setData] = useState(null)
    const {getContent} = useContext(ContentContext);
    let {interestName} = useParams();

    const handleVideo = (id) => {
        history.push(`/video/${interestName}/${id}`)
    }

    useEffect(async () => {
        let ref = localStorage.getItem(interestName)
        if(ref === null) {
            let data = await getContent(interestName)
            if(data === null) history.push('/404')
            else setData(JSON.parse(ref));
        }
        else setData(JSON.parse(ref));
    }, [interestName])



    return (

        <div class="content-section">
            {data !== null && (
            <div class="container">
                <div class="content-grid">
                    <div class="row">

                        {data.content.map((item,id) => (
                            <div key={id} class="col-sm-4" onClick={() => handleVideo(id)}>
                                <div class="content-item">
                                    <div class="content-img-container">
                                        {/* <img src="https://miro.medium.com/max/1400/1*YelzR8Eh7JqHP9i73Ry5sw.jpeg" alt="" /> */}
                                       <div dangerouslySetInnerHTML={{__html: item}}></div>
                                    </div>
                                    <div class="item-info">
                                        <h4>Lorem, ipsum dolor sit amet consectetur adipisicing.</h4>
                                    </div>
                                </div>
                            </div>
                        ))}


                        <div class="col-sm-4" onClick={handleVideo}>
                            <div class="content-item">
                                <div class="content-img-container">
                                    <img src="https://miro.medium.com/max/1400/1*YelzR8Eh7JqHP9i73Ry5sw.jpeg" alt="" />
                                </div>
                                <div class="item-info">
                                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing.</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="content-item">
                                <div class="content-img-container">
                                    <img src="https://miro.medium.com/max/1400/1*YelzR8Eh7JqHP9i73Ry5sw.jpeg" alt="" />
                                </div>
                                <div class="item-info">
                                    <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>

    )
}

export default Dashboard
