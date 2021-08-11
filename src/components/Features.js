import { Container } from '@material-ui/core'
import React from 'react'
import FeatureCard from './FeatureCard'

function Features() {
    return (
        <div class="how-section">
            <div class="container">
                <div class="how-header">
                    <h2>How it Work</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vitae culpa assumenda praesentium nesciunt atque cupiditate reprehenderit, quisquam fugit delectus.
                    </p>
                </div>
                <div class="how-body">
                    <div class="row">

                        <FeatureCard title="Registration" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit ipsam iure nesciunt ex quia." />
                        <FeatureCard title="Skill Quotient Test" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit ipsam iure nesciunt ex quia." />
                        <FeatureCard title="Learn and perform" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit ipsam iure nesciunt ex quia." />
                        <FeatureCard title="Involve" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit ipsam iure nesciunt ex quia." />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
