function t(id){
	return document.getElementById(id);
}
function audioApp(){
	var audio = new Audio();
	var audio_index = 1;
	var is_playing = false;
	var playingtrack;
	var trackbox = t("playlist");
	var tracks = {
       "track1":["Aisle 10", "Scapegoat Wax", "https://raw.githubusercontent.com/rurane/rurane.github.io/master/music/Scapegoat%20Wax%20-%20Aisle%2010.mp3", "https://images-na.ssl-images-amazon.com/images/I/51mnishY6hL.jpg", "Added 09/07/17"],
    
    "track2":["qwerty enchanted the house and now it's attacking us ", "in love with a ghost", "https://raw.githubusercontent.com/rurane/rurane.github.io/master/music/in%20love%20with%20a%20ghost%20-%20qwerty%20enchanted%20the%20house%20and%20now%20it's%20attacking%20us.mp3", "http://images.genius.com/250609fff137f11c9f6b75541c3a3aa3.1000x999x1.jpg", "Added 09/07/17"],
    
        "track3":["flowers feat. nori", "in love with a ghost", "https://raw.githubusercontent.com/rurane/rurane.github.io/master/music/in%20love%20with%20a%20ghost%20-%20flowers%20feat.%20nori.mp3", "https://f4.bcbits.com/img/a1925685198_10.jpg"],
    
        "track4":["plswaveback", "Slacker", "https://raw.githubusercontent.com/rurane/rurane.github.io/master/music/Slacker-%20plswaveback.mp3", "https://i.ytimg.com/vi/TyXoFG-HPQs/maxresdefault.jpg", "Added 09/07/17"],
    
        "track5":["Our Glorious Leader", "Mike Diva", "https://raw.githubusercontent.com/rurane/rurane.github.io/master/music/Mike%20Diva%20-%20Our%20Glorious%20Leader.mp3", "http://direct.rhapsody.com/imageserver/images/Alb.230048937/600x600.jpg", "Added 09/07/17"],
    
        "track6":["DO THE SANS", "Matrix-MarioX", "https://raw.githubusercontent.com/rurane/rurane.github.io/master/music/MATRIXMARIO%20DO%20THE%20SANS.mp3", "https://i1.sndcdn.com/artworks-000145634845-n4ovjd-t500x500.jpg", "Added 09/07/17"],
    
  
	    "track7":["Solanine", "Rav", "https://raw.githubusercontent.com/rurane/rurane.github.io/master/music/Rav%20-%20BENEATH%20THE%20TOXIC%20JUNGLE%20-%2002%20Solanine.mp3", "https://f4.bcbits.com/img/a2302460103_10.jpg", "Added 09/07/17"],
    
        "track8":["San Francisco", "Midicronica", "https://raw.githubusercontent.com/rurane/rurane.github.io/master/music/Midicronica%20-%20San%20Francisco..mp3", "https://images.shazam.com/coverart/t42803723-b500044684_s400.jpg", "Added 09/07/17"],
    
    "track9":["Saliverne", "Our Samplus", "https://raw.githubusercontent.com/rurane/rurane.github.io/master/music/Ours%20Samplus%20%2318%20-%20Saliverne.mp3", "https://i.ytimg.com/vi/W6oW0taCgY4/maxresdefault.jpg", "Added 09/07/17"],
    
    "track10":["Fell in Love With a Girl (Lewd behaviour remix)", "Ghetto Funk", "https://raw.githubusercontent.com/rurane/rurane.github.io/master/music/Ghetto%20Funk%20-%20Fell%20in%20Love%20With%20a%20Girl%20%5BLewd%20Behavior%20Remix%5D.mp3", "https://f4.bcbits.com/img/a2541527854_10.jpg", "Added 09/07/17"],
    

    
	};
	for(var track in tracks){
		var tb = document.createElement("div");
    var pb = document.createElement("div");
    var tn = document.createElement("div");
    var ta = document.createElement("div");
    var tg = document.createElement("div");
    var tq = document.createElement("div");
    var ti = document.createElement("div");
    
		tb.id = "play_item";
	  pb.className = "item_play fa fa-play";
	  tn.className = "item_name";
	  ta.className = "item_artist";
	  tg.className = "item_gif";
    tq.className = "item_quote";
    ti.className = "item_icons";
    ti.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i> <i class='fa fa-share-alt' aria-hidden='true'></i> <i class='fa fa-heart-o' aria-hidden='true'></i> <i class='fa fa-ellipsis-h' aria-hidden='true'></i> ";
    
		tn.innerHTML = tracks[track][0];
    ta.innerHTML = tracks[track][1];
    pb.id = tracks[track][2];
    tg.innerHTML = "<div style='background: url("+tracks[track][3]+") center center; background-size: cover;'></div>";
    tq.innerHTML = tracks[track][4];
    pb.addEventListener("click", switchTrack);
    
    tb.appendChild(pb);
    tb.appendChild(tn);
    tb.appendChild(ta);
    tb.appendChild(tg);
    tb.appendChild(tq);
    tb.appendChild(ti);
    trackbox.appendChild(tb);
    
		audio_index++;
	}
	audio.addEventListener("ended",function(){
	    t(playingtrack).className = "item_play fa fa-play";
		playingtrack = "";
		is_playing = false;
	});
	function switchTrack(event){
		if(is_playing){
		    if(playingtrack != event.target.id){
			    is_playing = true;
				t(playingtrack).className = "item_play fa fa-play";
          t(playingtrack).parentElement.className = "no";
			    event.target.className = "item_play fa fa-pause";
          event.target.parentElement.className = "active";
			    audio.src = event.target.id;
	            audio.play();
			} else {
			    audio.pause();
			    is_playing = false;
				event.target.className = "item_play fa fa-play";
        event.target.parentElement.className = "no";
			}
		} else {
			is_playing = true;
			event.target.className = "item_play fa fa-pause";
      event.target.parentElement.className = "active";
			if(playingtrack != event.target.id){
				audio.src = event.target.id;
        event.target.parentElement.className = "no";
			}
	        audio.play();
      event.target.parentElement.className = "active";
		}
		playingtrack = event.target.id;
	}
}
window.addEventListener("load", audioApp);