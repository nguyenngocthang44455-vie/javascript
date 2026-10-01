function checkRong(idInput, idErr, tenTruong) {
    var val = document.getElementById(idInput).value.trim();
    var errEle = document.getElementById(idErr);
    if (val === "") {
        errEle.innerHTML = "Vui lòng nhập " + tenTruong;
        return false;
    } else {
        errEle.innerHTML = "";
        return true;
    }
}

function checkPhone() {
    var sdt = document.getElementById("sdt").value.trim();
    var errPhone = document.getElementById("err_sdt");
    if (sdt.length < 10 || isNaN(sdt)) {
        errPhone.innerHTML = "Số điện thoại phải từ 10 chữ số trở lên";
        return false;
    } else {
        errPhone.innerHTML = "";
        return true;
    }
}

function chonLoaiDiaChi(loai) {
    if (loai === "vanphong") {
        alert("Bạn chọn giao hàng tại văn phòng");
    } else if (loai === "nharieng") {
        alert("Bạn chọn giao hàng tại nhà riêng");
    }
}

function Luu() {
    var validTen = checkRong("ten", "err_ten", "tên");
    var validDiachi = checkRong("diachi", "err_diachi", "địa chỉ nhận hàng");
    var validTinh = checkRong("tinh", "err_tinh", "tỉnh / thành phố");
    var validQuan = checkRong("quan", "err_quan", "quận / huyện");
    var validPhuong = checkRong("phuong", "err_phuong", "phường / xã");
    var validSdt = checkPhone();

    if (validTen && validDiachi && validTinh && validQuan && validPhuong && validSdt) {
        alert("Lưu thông tin thành công");
    } else {
        alert("Thông tin nhập không hợp lệ");
    }
    return false;
}