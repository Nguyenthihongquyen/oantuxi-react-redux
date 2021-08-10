import React, { Component } from 'react'
import './GameOanTuXi.css';
import Thanos from './Thanos';
import IronMan from './IronMan';
import ThongTinGame from './ThongTinGame';
import { connect } from 'react-redux'
class GameOanTuXi extends Component {
    render() {
        return (
            <div className="gameOanXuXi">

                <div className="row text-center pt-3">
                    <div className="col-4">
                        <IronMan />
                    </div>
                    <div className="col-4">
                        <ThongTinGame />
                        <button className="btn btn-success p-2 mt-4 display-4" onClick={() => {
                            this.props.playGame()
                        }}>Play game</button>
                    </div>
                    <div className="col-4">
                        <Thanos />
                    </div>
                </div>
            </div>


        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            dispatch({
                type: 'RANDOM_KEO_BUA_BAO'
            });
            dispatch({
                type: 'RESULT_GAME'
            });
        }
    }
}
export default connect(null, mapDispatchToProps)(GameOanTuXi)
