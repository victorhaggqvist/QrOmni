/*window.onload=function () {
var data = window.location.hash.substring(1);
  // Get image for rendered QR code
  var image = qr.image({
    size: 8,
    level: 'H',
    value: data
  });
  // Check image was returned (may not have been if browser doesn't support the
  // HTML5 canvas element)
  if (image) {
  document.getElementById("qrcode").src=image.src;
  //$("#qrcode")=image;
	console.log("done");
    // Add image to page
//    document.body.appendChild(image);
  }
};*/

window.onload=function () {
  var data = window.location.hash.substring(1);
  qr.canvas({
      size: 8,
      level: 'H',
      value: data,
      canvas: document.getElementById('qr')
    });
  document.getElementById("data").value=data;
};

document.getElementById("reload").onclick=function(){
  qr.canvas({
      size: 8,
      level: 'H',
      value: document.getElementById("data").value,
      canvas: document.getElementById('qr')
    });
};