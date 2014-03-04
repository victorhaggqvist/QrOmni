function makeQr(data){
  qr.canvas({
      size: 8,
      level: 'H',
      value: (data===undefined)?document.getElementById("data").value:data,
      canvas: document.getElementById('qr')
    });
}

window.onload = function () {
  var data = window.location.hash.substring(1);
  makeQr(data);
  document.getElementById("data").value=data;
};

document.getElementById("reload").onclick = function(){
  makeQr();
};

document.getElementById("data").onchange = function(){
  makeQr();
};

document.getElementById("data").onkeyup = function(){
  makeQr();
};
