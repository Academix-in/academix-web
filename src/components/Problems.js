import React from 'react'

function Problems() {
    return (
        <div class="problem-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 d-grid" style={{ alignItems: "center" }}>
                        <div>
                            <h1>Problems faced by Students</h1>
                            <div class="problem-list">
                                <div class="problem-item active">
                                    Problem 1
                                </div>
                                <div class="problem-item">
                                    Problem 2
                                </div>
                                <div class="problem-item">
                                    Problem 3
                                </div>
                                <div class="problem-item">
                                    Problem 4
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="problem-detail">
                            <div class="problem-img">
                                <img src="images/login.png" alt="" />
                            </div>
                            <div class="problem-title">
                                <h1>Problem 1</h1>
                            </div>
                            <div class="problem-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laudantium repellat reprehenderit aliquid impedit, voluptates, nobis voluptate necessitatibus enim quidem ab. Voluptatem, illo atque omnis magnam totam corporis odit iure qui cumque. Laboriosam, sed accusamus. A eos animi quia iusto pariatur nesciunt. Laborum corporis dignissimos exercitationem. Eveniet minima possimus unde.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Problems
