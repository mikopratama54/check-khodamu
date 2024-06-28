var hasilKhodam = {};
var loading = document.querySelector(".loading");
var khodams = [
  "[Pocong Kesasar]",
  ",,Khodam kamu kabur,,",
  "[Tuyul Penggembala Kambing]",
  ",,Khodam kamu minggat,,",
  "[Sundel Bolong Pecinta Drama]",
  ",,Khodam kamu lagi masak, coba cek di dapur,,",
  "[Jenglot Pencinta Kopi]",
  ",,Buto ijo pakek sempak bolong, belikan sempak baru!!",
  "[Leak Penari Balet]",
  "[Babi Ngepet Ahli Investasi]",
  "[Gendruwo Stylist]",
  ",,Silahkan coba lagi,,",
  "[Siluman Ular Pemilik Salon]",
  ",,Khodam kamu lagi mandi, coba cek di sumur,,",
  "[Setan Gundul Hobi Mancing]",
  "[Nyai Blorong Pengusaha Sukses]",
  "[Mak Lampir Penggemar Traveling]",
  "[Nyai Roro Kidul Versi Modern]",
  ",,Khodam kamu lagi malas, coba cek di kamar tidur,,",
  "[Kuntilanak Vlogger]",
  "[Tuyul CEO Startup]",
  "[Genderuwo Influencer]",
  "[Sundel Bolong sosialita]",
  ",,Khodam kamu lagi mancing,,",
];

function checkKhodam(event) {
  event.preventDefault();
  var nama = document.getElementById("nama").value.trim();
  if (nama.length > 3) {
    showLoading();
  } else {
    displayResult();
  }
}

function showLoading() {
  loading.style.display = "flex";
  setTimeout(hideLoading, 2000);
}

function hideLoading() {
  loading.style.display = "none";
  displayResult();
}

function displayResult() {
  var nama = document.getElementById("nama").value.trim();
  var message = document.getElementById("message");

  if (nama.length > 3) {
    if (!hasilKhodam[nama]) {
      hasilKhodam[nama] = khodams[Math.floor(Math.random() * khodams.length)];
    }
    message.innerHTML =
      "<div style='background-color: transparent; padding: 10px; border: 2px solid #fff; border-radius: 10px; margin-top: 20px; margin-bottom: 20px; font-size: 25px; font-family: Montserrat;'><span style='color: #fff;'>Khodam Kamu  <br></span>" +
      "<span style='color: rgba(116, 182, 218, 0.8);'>" +
      hasilKhodam[nama] +
      "</span><br><br><small style='color:#ff5722;'></small></div>";
  } else {
    message.innerHTML =
      "<div style='background-color: #ff7043; color: #ffffff; padding: 10px; border-radius: 5px; margin-top: 20px; margin-bottom: 20px;'>Khodam kabur... kejar </div>";
  }
}
