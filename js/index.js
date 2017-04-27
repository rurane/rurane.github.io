	$(document).ready(function(){
		var quoteSource=[
		{
			quote: "Teamspeak",
			name:"Rurane"
	    },
					{
			quote: "Deep in a fan-led attack on titan forums defending Naruto in fluent Japanese",
			name:"Rurane"
	    },
					{
			quote: "Caring for his horses at the stable",
			name:"Rurane"
	    },
					{
			quote: "Chinatown gathering A E S T H E T I C pics",
			name:"Rurane"
	    },
								{
			quote: "In an unwanted 3-way",
			name:"Rurane"
	    },
											{
			quote: "League Lobby tryna be a 6th member",
			name:"Rurane"
	    },
											{
			quote: "Calling toplane",
			name:"Rurane"
	    },
											{
			quote: "Regretting my A-level choices",
			name:"Rurane"
	    },
											{
			quote: "Auctioning off his soul to the lowest bidder",
	    },
											{
			quote: "Communist Moonbase",
			name:"Rurane"
	    },
											{
			quote: "De-militarized zone between North & South Korea",
			name:"Rurane"
	    },
											{
			quote: "Defending Lady Helm on his trusty White steed",
	    },
											{
			quote: "In an unwanted 3-way",
			name:"Rurane"
	    },
					{
			quote: "Revising",
			name:"Rurane"
	    },
					{
			quote: "Creating better OC",
			name:"-Rurane"
	    },
					{
			quote: "C.A.T.S",
			name:"Everyone"
	    },
					{
			quote: "With Captain Morgan and his two First Mates",
			name:"A drunken submitter"
	    },
					{
			quote: "Banned from TS for a hard-R",
			name:"Ben"
	    },
					{
			quote: "Tracking down whoever made the Insta account",
			name:"Sixth-Form Faculty"
	    },
					{
			quote: "Stroking his body pillow, deafened by Nightcore",
			name:"-Rurane"
	    },
			
	
	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready
