/**
 * Bài Tập 1 :
 *
 * Đầu Vào :
 *
 * - tạo biến Số nguyên dương nhỏ nhất n
 * - tạo biến tổng S sao cho S > 10000
 *
 * XỬ lý :
 *  - sử dụng vòng lăp while
 * CT : s = s + n
 * Đầu ra ; báo cáo kết quả
 */

var n = 0;
var s = 0;
while (s <= 10000) {
  s = s + n;
  n++;
  result = "Số Nguyên Dương Nhỏ Nhất Là : " + n + "</br>" + "Tổng Là : " + s;
}
document.getElementById("btnTimKiem").innerHTML = result;

/**
 * Bài Tập 2:
 * Đầu vào :
 * - nhập 2 số x, n
 * Xử Lý :
 * - tạo biến x, n
 * - tạo biến tổng S
 * Đầu ra : báo cáo kết quả
 */

document.getElementById("btnCheck").onclick = function () {
  var numberX = document.getElementById("txtNumberX").value;
  var numberN = document.getElementById("txtNumberN").value;
  var s = 0;
  var t = 1;
  for (var i = 1; i <= numberN; i++) {
    t = t * numberX;
    s = t + s;
  }

  document.getElementById("btnThongBao").innerHTML = "Tổng là : " + s;
};

/**
 * Bài Tập 3:
 *
 * Đầu Vào :
 * - Nhập 1 Số nguyên
 * XỬ Lý :
 * - tạo biến number3
 * - tạo biến tổng s
 * - sử dụng vòng lặp for
 *
 * Đầu ra : báo cáo kết quả
 *
 */

document.getElementById("btnCheckNumber3").onclick = function () {
  var n = document.getElementById("txtNumber3").value * 1;
  var s = 1;
  for (var i = 1; i <= n; i++) {
    s = s * i;
  }
  document.getElementById("footerCheckNumber3").innerHTML =
    "Giai Thừa Là : " + s;
};

/**
 * Bài Tập 4 :
 * Đầu Vào :
 * - Bấm vào nút Button tạo ra 10 thẻ div
 * Xử Lý :
 * - Nếu số chia hết cho 2 => chẵn có màu đỏ
 * - Nếu số không chia hết cho 2 => chẵn có màu xanh
 * - sư dụng vòng lặp For
 *
 * Đầu ra : Báo cáo kết quả
 *
 *
 *
 *
 */

document.getElementById("btnCheckNumber4").onclick = function () {
  for (var i = 1; i <= 10; i++) {
    var color = document.getElementById("footerCheckNumber4");
    var child = document.createElement("div");
    color.appendChild(child);
    if (i % 2 === 0) {
      child.innerHTML = " Div chẵn " + i;
      child.style.backgroundColor = "red";
      child.style.color = "white";
    } else {
      child.innerHTML = " Div lẻ " + i;
      child.style.backgroundColor = "blue";
      child.style.color = "white";
    }
  }
};
