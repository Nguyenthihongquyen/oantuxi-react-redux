const initialState = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './images/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './images/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './images/bao.png', datCuoc: false },
    ],
    ketQua: "Welcome to game oan tu xi <3",
    soBanThang: 0,
    soBanChoi: 0,
    thanos: { ma: 'keo', hinhAnh: './images/keo.png' },
}
const oanTuXiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            console.log(action);
            let mangDatCuocUpdate = [...state.mangDatCuoc];
            mangDatCuocUpdate = mangDatCuocUpdate.map((item, index) => {
                return { ...item, datCuoc: false }
            })
            console.log(mangDatCuocUpdate);
            let index = mangDatCuocUpdate.findIndex(item => item.ma === action.maCuoc);
            if (index !== -1) {
                mangDatCuocUpdate[index].datCuoc = true;
            }
            state.mangDatCuoc = mangDatCuocUpdate;
            return { ...state };
        }
        case 'RANDOM_KEO_BUA_BAO': {
            console.log(action);
            let tuXiNgauNhien = state.mangDatCuoc[Math.floor(Math.random() * 3)];
            state.thanos = tuXiNgauNhien;
            return { ...state };
        }
        case 'RESULT_GAME': {
            state.soBanChoi += 1;
            let selectedOanTuXi = state.mangDatCuoc.find(item => item.datCuoc === true);
            let thanos = state.thanos;
            switch (selectedOanTuXi.ma) {
                case 'keo':
                    if (thanos.ma === 'keo') {
                        state.ketQua = 'Hòa >.<';
                    } else if (thanos.ma === 'bua') {
                        state.ketQua = 'Thua sắp mặt luôn =((((';
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = "I'm iron man, i love you 3000!!";
                    }
                    break;
                case 'bua':
                    if (thanos.ma === 'keo') {
                        state.soBanThang += 1;

                        state.ketQua = "I'm iron man, i love you 3000!!";

                    } else if (thanos.ma === 'bua') {
                        state.ketQua = 'Hòa';
                    } else {
                        state.ketQua = 'Thua';
                    } break;
                case 'bao':
                    if (thanos.ma === 'keo') {
                        state.ketQua = 'Thua';

                    } else if (thanos.ma === 'bua') {
                        state.soBanThang += 1;

                        state.ketQua = "I'm iron man, i love you 3000!!";

                    } else {
                        state.ketQua = 'Hòa';
                    } break;
                default:
                    state.soBanThang += 1;
                    state.ketQua = "I'm iron man, i love you 3000!!";
                    return { ...state };
            }

            return { ...state };
        }
        default:
            return { ...state };
    }
}
export default oanTuXiReducer;
