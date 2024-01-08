const deviceIPSpanEl = document.querySelector("#my-ip")

const xhr = new XMLHttpRequest()


xhr.onreadystatechange = function() {
    console.log(this);
    if(this.readyState == 4 && this.status == 200) {
        // console.log();
        deviceIPSpanEl.textContent =  xhr.responseText
    }
}

xhr.open("GET", "https://ipv4.icanhazip.com")
xhr.send()