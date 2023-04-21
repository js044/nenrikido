window.addEventListener("load", (event) => {
    // (A) PLAYER INIT
    // (A1) PLAYLIST - CHANGE TO YOUR OWN!
    let playlist = [
    
      {name: "✦ Peace & Serenity - Silent Hill 2", src: "https://dl.dropbox.com/s/y7jud0xbnkx6czp/peace_serenity.mp3?dl=0"},
      {name: "✦ Lavender Waters - Yume 2kki", src: "https://dl.dropbox.com/s/ldsg26pycgz7g3b/lavender_waters.mp3?dl=0"},      
      {name: "✦ Anemone - Forest of Drizzling Rain", src: "https://dl.dropbox.com/s/9s6449f802cfacb/anemone.mp3?dl=0"},
      {name: "✦ Water Temple (Cursed) - Tomba! 2", src: "https://dl.dropbox.com/s/286r00hjs7ufi5s/water_temple.mp3?dl=0"},
      {name: "✦ The Pink Sea - Yume Nikki", src: "https://dl.dropbox.com/s/pipwb15f6ax772b/pink_sea.mp3?dl=0"},
      {name: "✦ Eterna Forest - Pokemon Diamond & Pearl", src: "https://dl.dropbox.com/s/fd8n444eg0abz2j/eterna_forest.mp3?dl=0"},
      {name: "✦ Winter (The Wind Can Be Still) - Stardew Valley", src: "https://dl.dropbox.com/s/z5hqu585ob95856/winter.mp3?dl=0"},
      {name: "✦ Miss Library - Misao", src: "https://dl.dropbox.com/s/adu689cwdcaw0j0/miss_library.mp3?dl=0"},
      {name: "✦ The Moving Storybook - Ib", src: "https://dl.dropbox.com/s/su9t9kakso9s92m/moving_storybook.mp3?dl=0"},
      {name: "✦ Kujara Summit (Cursed) - Tomba! 2", src: "https://dl.dropbox.com/s/9nvrh3td4q9427p/kujara_summit.mp3?dl=0"},
      {name: "✦ Lotus Waters - Yume 2kki", src: "https://dl.dropbox.com/s/3o0j523e9r5zzs5/lotus_waters.mp3?dl=0"},
    ];
  
    // (A2) AUDIO PLAYER & GET HTML CONTROLS
    const audio = new Audio(),
          aPlay = document.getElementById("aPlay"),
          aPlayIco = document.getElementById("aPlayIco"),
          aNow = document.getElementById("aNow"),
          aTime = document.getElementById("aTime"),
          aSeek = document.getElementById("aSeek"),
        //  aVolume = document.getElementById("aVolume"),
        // aVolIco = document.getElementById("aVolIco"),
          aList = document.getElementById("aList");
  
    // (A3) BUILD PLAYLIST
    for (let i in playlist) {
      let row = document.createElement("div");
      row.className = "aRow";
      row.innerHTML = playlist[i]["name"];
      row.addEventListener("click", () => audPlay(i));
      playlist[i]["row"] = row;
      aList.appendChild(row);
    }
  
    // (B) PLAY MECHANISM
    // (B1) FLAGS
    var audNow = 0, // current song
        audStart = false, // auto start next song
  
    // (B2) PLAY SELECTED SONG
    audPlay = (idx, nostart) => {
      audNow = idx;
      audStart = nostart ? false : true;
      audio.src = encodeURI(playlist[idx]["src"]);
      for (let i in playlist) {
        if (i == idx) { playlist[i]["row"].classList.add("now"); }
        else { playlist[i]["row"].classList.remove("now"); }
      }
    };
  
    // (B3) AUTO START WHEN SUFFICIENTLY BUFFERED
    audio.addEventListener("canplay", () => { if (audStart) {
      audio.play();
      audStart = false;
    }});
  
    // (B4) AUTOPLAY NEXT SONG IN THE PLAYLIST
    audio.addEventListener("ended", () => {
      audNow++;
      if (audNow >= playlist.length) { audNow = 0; }
      audPlay(audNow);
    });
  
    // (B5) INIT SET FIRST SONG
    audPlay(0, true);
  
    // (C) PLAY/PAUSE BUTTON
    // (C1) AUTO SET PLAY/PAUSE TEXT
    audio.addEventListener("play", () => aPlayIco.innerHTML = "pause");
    audio.addEventListener("pause", () => aPlayIco.innerHTML = "play_arrow");
  
    // (C2) CLICK TO PLAY/PAUSE
    aPlay.addEventListener("click", () => {
      if (audio.paused) { audio.play(); }
      else { audio.pause(); }
    });
  
    // (D) TRACK PROGRESS
    // (D1) SUPPORT FUNCTION - FORMAT HH:MM:SS
    var timeString = secs => {
      // (D1-1) HOURS, MINUTES, SECONDS
      let ss = Math.floor(secs),
          hh = Math.floor(ss / 3600),
          mm = Math.floor((ss - (hh * 3600)) / 60);
      ss = ss - (hh * 3600) - (mm * 60);
  
      // (D1-2) RETURN FORMATTED TIME
      if (hh>0) { mm = mm<10 ? "0"+mm : mm; }
      ss = ss<10 ? "0"+ss : ss;
      return hh>0 ? `${hh}:${mm}:${ss}` : `${mm}:${ss}` ;
    };
  
    // (D2) INIT SET TRACK TIME
    audio.addEventListener("loadedmetadata", () => {
      aNow.innerHTML = timeString(0);
      aTime.innerHTML = timeString(audio.duration);
    });
  
    // (D3) UPDATE TIME ON PLAYING
    audio.addEventListener("timeupdate", () => aNow.innerHTML = timeString(audio.currentTime));
  
    // (E) SEEK BAR
    audio.addEventListener("loadedmetadata", () => {
      // (E1) SET SEEK BAR MAX TIME
      aSeek.max = Math.floor(audio.duration);
  
      // (E2) USER CHANGE SEEK BAR TIME
      var aSeeking = false; // user is now changing time
      aSeek.addEventListener("input", () => aSeeking = true); // prevents clash with (e3)
      aSeek.addEventListener("change", () => {
        audio.currentTime = aSeek.value;
        if (!audio.paused) { audio.play(); }
        aSeeking = false;
      });
  
      // (E3) UPDATE SEEK BAR ON PLAYING
      audio.addEventListener("timeupdate", () => {
        if (!aSeeking) { aSeek.value = Math.floor(audio.currentTime); }
      });
    });
  
    // (G) ENABLE/DISABLE CONTROLS
    audio.addEventListener("canplay", () => {
      aPlay.disabled = false;
  
      aSeek.disabled = false;
    });
    audio.addEventListener("waiting", () => {
      aPlay.disabled = true;
  
      aSeek.disabled = true;
    });
  });
  
  // (F) NEXT/BACK
  function backnext (n) {
    if (n) { audNow++; } else { audNow--; }
    if (audNow >= playlist.length) { audNow = 0; }
    if (audNow < 0) { audNow = playlist.length - 1; }
    audPlay(audNow);
  }