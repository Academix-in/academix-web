import React from 'react'

function FeatureCard(prop) {
    return (
        <div class="col-lg-3 col-md-6 how-item">
            <img src="images/login.png" alt="" />
            <h4>{prop.title}</h4>
            <p>{prop.body}</p>
        </div>
    )
}

export default FeatureCard
