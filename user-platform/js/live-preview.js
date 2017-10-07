window.onkeyup = function(e) {
   document.getElementById('title-text').innerHTML = document.getElementById("title-input").value;
   document.getElementById('text').innerHTML = document.getElementById("description-input").value;
   document.getElementById('coins').innerHTML = document.getElementById("coins-input").value;
   document.getElementById('address').innerHTML = document.getElementById("address-input").value;
   document.getElementById('email').innerHTML = document.getElementById("email-input").value;
}

document.getElementById('image-input').onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById("main-image").src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }

    // Not supported
    else {
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
    }
}
