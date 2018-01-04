var twit=require("twit");
var config=require("./config.js");
var twitter=new twit(config);
var retweet = function() {
		var params = {
		q: '#VirushkaReception , #Virushka',
		result_type: 'recent',
		lang: 'en'
	}
twitter.get("search/tweets",params,function(err,data){
	if(!err){
		var retweetId=data.statuses[0].id_str;
		twitter.post("statuses/retweet/:id",{
			id:retweetId
		},function(err,response){
			if(response){
				console.log("retweeted!!!!!");
				console.log(data.statuses[0].text);
			}
			if(err){
				console.log("something went wrong!!");
			}
		});
	}
	else{
		console.log("something went wrong while searching......");
	}
})
}
retweet();
setInterval(retweet,300000);
var Favtweet=function(){
	var params={
		q:"#VirushkaReception , #Virushka",
		result_type:"recent",
		lang:"en"
	}
	twitter.get("search/tweets",params,function(err,data){
		if(!err){
			var fav=data.statuses;
			var index=Math.floor((Math.random())*(fav.length));
			var favid=fav[index].id_str;
			if(typeof(favid)!==undefined){
			twitter.post("favorites/create",{id:favid},function(err,data){
				if(err){
					console.log("errorrrrrrrrrrr");}
					else
					{
						console.log("favorite sucess");
						
					}
				})
			}
		}
		else{
			console.log("wrong id");
		}
		})
	}
	Favtweet();
	setInterval(Favtweet,300000);
