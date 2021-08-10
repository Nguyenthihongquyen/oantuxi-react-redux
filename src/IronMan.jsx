import React, { Component } from 'react'
import { connect } from 'react-redux';

class IronMan extends Component {
    render() {
        return (
            <div className="text-center d-flex justify-content-center flex-column align-items-center">
                <div className="playerBubble">
                    <img width={75} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} alt="" />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 200, height: 200 }} src="./images/player.png" alt="" />
                <div className="listKeoBuaBao">
                    {this.props.mangDatCuoc.map((item, index) => {
                        // Thêm border cho item được chọn
                        let border = {};
                        if (item.datCuoc) {
                            border = { border: '3px groove #FF7D26' }
                        }
                        return <button style={border} className="playerBtnItem btn btn-light" onClick={() => { this.props.datCuoc(item.ma); }}><img idth={75} src={item.hinhAnh} /></button>
                    })}

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangDatCuoc: state.oanTuXiReducer.mangDatCuoc
    }
}
const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IronMan)
