function changeChuyenNganh() {
    var chuyenNganh = document.getElementById("chuyennganh").value;
    var soTruong = document.getElementById("sotruong");

    if (chuyenNganh === "hethong") {
        soTruong.value = "Phân tích & Thiết kế";
    } else if (chuyenNganh === "phanmem") {
        soTruong.value = "Lập trình";
    } else if (chuyenNganh === "mang") {
        soTruong.value = "Quản lý mạng";
    } else {
        soTruong.value = "";
    }
}

function DangKy() {
    changeChuyenNganh();

    var mssv = document.getElementById("mssv").value;
    var hoten = document.getElementById("hoten").value;
    var tuoi = document.getElementById("tuoi").value;

    var errMssv = document.getElementById("err_mssv");
    var errHoten = document.getElementById("err_hoten");
    var errTuoi = document.getElementById("err_tuoi");
    var resNgoaiNgu = document.getElementById("res_ngoaingu");
    var status = document.getElementById("status");

    errMssv.innerHTML = "";
    errHoten.innerHTML = "";
    errTuoi.innerHTML = "";
    resNgoaiNgu.innerHTML = "";

    var isValid = true;

    if (mssv.length !== 10) {
        errMssv.innerHTML = "Mã sinh viên gồm 10 ký tự";
        isValid = false;
    }

    if (hoten === "" || hoten.length >= 30) {
        errHoten.innerHTML = "Họ tên không rỗng và < 30 ký tự";
        isValid = false;
    }

    var numTuoi = parseInt(tuoi);
    if (isNaN(numTuoi) || numTuoi < 18) {
        errTuoi.innerHTML = "Tuổi phải 18 trở lên";
        isValid = false;
    }

    var listNN = [];
    if (document.getElementById("chk_anh").checked) listNN.push("Anh");
    if (document.getElementById("chk_phap").checked) listNN.push("Pháp");
    if (document.getElementById("chk_nhat").checked) listNN.push("Nhật");

    var ngoaingu = listNN.join(" và ");
    resNgoaiNgu.innerHTML = ngoaingu;

    if (isValid) {
        status.style.color = "blue";
        status.innerHTML = "Bạn đã đăng ký thành công";
    } else {
        status.style.color = "blue";
        status.innerHTML = "Bạn phải nhập lại cho đúng";
    }

    return false;
}