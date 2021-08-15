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
            // thuật toán để check thắng hòa thua như sau:
            // tạo ra 1 list [keo,bua,bao]; mỗi lần người dùng chọn hoặc máy chọn thì dùng hàm findIndex để lấy index ra
            // để ý thấy cái mảng này, thì index của nó có quy luật thắng thua như sau
            // mình chọn cái gì bạn chọn đúng cái đó thì hòa, cái này dễ
            // mình chọn bất cứ cái gì, nếu bạn chọn sau mình 1 index, mình thua ("bua" thắng "keo", "bao" thang "bua"),
            // hoặc bạn chọn trước mình 2 đơn vị mình cũng thua(mình chọn "bao" bạn chọn "keo")
            // if(indexYou===indexMe){
            //     result ="DRAW";
            // }else if(indexMe===indexYou-1|| indexMe === indexYou+2){
            //     result ="LOSE";
            // }else{
            //     result ="WIN";
            // }

            switch (selectedOanTuXi.ma) {//dùng thuật toán như bên trên để đỡ switch case mệt mỏi nha e, còn làm biếng đọc thì thôi a xin lỗi phiền e rồi :))
                case 'keo':
                    if (thanos.ma === 'keo') {
                        state.ketQua = 'Hòa >.<';
                    } else if (thanos.ma === 'bua') {
                        state.ketQua = 'Thua sắp mặt luôn =(((('; //xàm
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
