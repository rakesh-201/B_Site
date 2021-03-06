$(".album-poster").on("click", function() {
    var dataSwitchId = $(this).attr("data-switch");
    //console.log(dataSwitchId);

    ap.list.switch(dataSwitchId);

    ap.play();
    $("#aplayer").addClass("showPlayer");
});

$(function() {
    $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
    trigger: 'focus'
})

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [{
            name: 'Kinna Sona',
            artist: 'Arjit Singh',
            url: 'static/2019/Kinna_Sona.mp3',
            cover: 'static/2019/Kinna_Sona.jpg'
        },
        {
            name: 'Garmi',
            artist: 'Arjit Singh',
            url: 'static/2019/Garmi.mp3',
            cover: 'static/2019/Garmi.jpg'
        },
        {
            name: 'Teri Mitti',
            artist: 'Arjit Singh',
            url: 'static/2019/Teri_Mitti.mp3',
            cover: 'static/2019/Teri_Mitti.jpg'
        },
        {
            name: 'Hawa Banke',
            artist: 'Arjit Singh',
            url: 'static/2019/Hawa_Banke.mp3',
            cover: 'static/2019/Hawa_Banke.jpg'
        },
        {
            name: 'O_Saki_Saki',

            url: 'static/2019/O_Saki_Saki.mp3',
            cover: 'static/2019/O_Saki_Saki.jpg'
        },
        {
            name: 'Makhna',
            artist: 'Arjit Singh',
            url: 'static/2020/Makhna.mp3',
            cover: 'static/2020/Makhna.jpg'
        },
        {
            name: 'Chandigarh Me',
            artist: 'Arjit Singh',
            url: 'static/2019/Chandigarh_Mein.mp3',
            cover: 'static/2019/Chandigarh_Mein.jpg'
        },
        {
            name: 'Tujhe Kitna Chahne Lage Hum',
            artist: 'Arjit Singh',
            url: 'static/2019/Tujhe_Kitna_Chahne_Lage.mp3',
            cover: 'static/2019/Tujhe_Kitna_Chahne_Lage.jpg'
        },
        {
            name: 'Thodi Jagah',
            artist: 'Arjit Singh',
            url: 'static/2019/Thodi_Jagah.mp3',
            cover: 'static/2019/Thodi_Jagah.jpg'
        },
        {
            name: 'Psycho Saiyaan',
            artist: 'Arjit Singh',
            url: 'static/2019/Psycho_Saiyaan.mp3',
            cover: 'static/2019/Psycho_Saiyaan.jpg'
        },
        {
            name: 'Pachtaoge',
            artist: 'Arjit Singh',
            url: 'static/arjit/Pachtaoge.mp3',
            cover: 'static/arjit/Pachtaoge.jpg'
        },
        {
            name: 'Tu Mila Toh Haina',
            artist: 'Arjit Singh',
            url: 'static/arjit/Tu_Mila_Toh_Haina.mp3',
            cover: 'static/arjit/Tu_Mila_Toh_Haina.jpg'
        },
        {
            name: 'Ik Vaari ya',
            artist: 'Arjit Singh',
            url: 'static/arjit/Ik_Vaari_ya.mp3',
            cover: 'static/arjit/Ik_Vaari_ya.jpg'
        },
        {
            name: 'Darkhaast',
            artist: 'Arjit Singh',
            url: 'static/arjit/Darkhaast.mp3',
            cover: 'static/arjit/Darkhaast.jpg'
        },
    ]
});

console.log(ap.audio);
let audiofiles = [
    'static/2019/Kinna_Sona.mp3', 'static/2019/Garmi.mp3', 'static/2019/Teri_Mitti.mp3', 'static/2019/Hawa_Banke.mp3',
    'static/2019/O_Saki_Saki.mp3', 'static/2020/Makhna.mp3', 'static/2019/Chandigarh_Mein.mp3', 'static/2019/Tujhe_Kitna_Chahne_Lage.mp3',
    'static/2019/Thodi_Jagah.mp3', 'static/2019/Psycho_Saiyaan.mp3', 'static/arjit/Pachtaoge.mp3',
    'static/arjit/Tu_Mila_Toh_Haina.mp3', 'static/arjit/Ik_Vaari_ya.mp3', 'static/arjit/Darkhaast.mp3',


];


let search = document.getElementById("searchTxt");
search.addEventListener("input", function() {
    let inputVal = search.value;
    inputVal = inputVal.toLocaleLowerCase();
    console.log("input event fired!", inputVal);
    let songCards = document.getElementsByClassName("songCard");
    Array.from(songCards).forEach(function(element) {
        let songTxt = element.getElementsByTagName("h4")[0].innerText;
        songTxt = songTxt.toLocaleLowerCase();
        if (songTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }

    })
});


function changeTheme() {
    let body = document.body;
    if (body.classList == "normal") {
        body.classList = "dark";
        let songName = document.querySelectorAll(".col-md-3 .songNameContainer h4");
        Array.from(songName).forEach((element) => {
            element.style.color = "yellow";
        })
        let artists = document.querySelectorAll("b");
        Array.from(artists).forEach((element) => {
            element.style.color = "lightgreen";
        })

    } else {
        body.classList = "normal";
        let songName = document.querySelectorAll(".col-md-3 .songNameContainer h4");
        Array.from(songName).forEach((element) => {
            element.style.color = "blue";
        })
        let artists = document.querySelectorAll("b");
        Array.from(artists).forEach((element) => {
            element.style.color = "green";
        })
    }
}

function changeIcon(element) {
    let icon = element.childNodes[0];
    if (icon.classList == "fa fa-heart-o") {

        icon.classList = "fa fa-heart";
    } else {
        icon.classList = "fa fa-heart-o";
    }

}

let songCards = document.getElementsByClassName("songCard");
var myFavprop = JSON.parse(localStorage.getItem("favProp"));
// console.log(myFavprop);
Array.from(songCards).forEach((e) => {
    let songCard = e.childNodes;
    let songName = songCard[3].childNodes[1].innerHTML;
    if (myFavprop != null) {

        if (myFavprop.some(e => e.songName === songName)) {
            /*localStorage contains this song*/
            console.log(songCard[7].childNodes[0]);
            let favBtn = songCard[7].childNodes[0];
            console.log("Both are same");
            console.log(favBtn);
            favBtn.classList = "fa fa-heart";
        }

    }

})


$(function() {
    $(".favBtn").on("click", function(e) {
        var icon = e.target;
        var songCard = this.parentNode.childNodes;
        var imgFile = songCard[1].childNodes[1].src;
        var songName = songCard[3].childNodes[1].innerHTML;
        var songInfo = songCard[5].childNodes[0].innerHTML;
        var dataId = $(songCard[1]).attr("data-switch");
        var audioFile = audiofiles[dataId];
        console.log(audioFile);
        var propToAdd = {
            imgFile: imgFile,
            songName: songName,
            songInfo: songInfo,
            audioFile: `${audioFile}`
        }
        var myFavprop = JSON.parse(localStorage.getItem("favProp"));
        console.log(propToAdd);
        console.log(myFavprop);
        if (icon.classList == "fa fa-heart") {

            if (myFavprop == null) {
                myFavprop = [];
            }
            console.log(myFavprop);
            if (myFavprop != null) {
                if (myFavprop.some(e => e.songName === propToAdd.songName)) {
                    console.log("already included");
                    if (propToAdd == myFavprop[j]) {
                        propToAdd = {};
                    }
                } else {
                    console.log("pushing");
                    myFavprop.push(propToAdd);
                }
            }
            localStorage.setItem("favProp", JSON.stringify(myFavprop));
        }
        if (icon.classList == "fa fa-heart-o") {
            for (let j = 0; j < myFavprop.length; j++) {
                if ((myFavprop[j].songName == propToAdd.songName) && (myFavprop[j].songInfo == propToAdd.songInfo)) {
                    console.log("already included");
                    myFavprop.splice(j, 1);
                }
                console.log(myFavprop);
            }
            localStorage.setItem("favProp", JSON.stringify(myFavprop));
        }

    })
})