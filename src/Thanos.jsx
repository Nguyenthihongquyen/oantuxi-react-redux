import React, { Component } from 'react'
import { connect } from 'react-redux'

class Thanos extends Component {
    render() {

        return (
            <div className="text-center d-flex justify-content-center flex-column align-items-center">
                <div className="computerBubble">
                    <img style={{ transform: 'rotate(180deg)' }} width={75} src={this.props.hinhAnhRandom} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./images/playerComputer.png" alt="" />

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        hinhAnhRandom: state.oanTuXiReducer.thanos.hinhAnh
    }
}
export default connect(mapStateToProps)(Thanos)
