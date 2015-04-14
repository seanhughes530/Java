var polyenso = {
	bandName: 'Polyenso',
	genre: 'indie rock, electronic, folk, jazz, hip-hop',
	location: 'St.Petersburg Florida',
	members: {
		brennan: {
			firstName: 'Brennan',
			lastName: 'Taulbee',
			instrument: 'lead vocals and keyboard'
		},
		alex: {
			firstName: 'Alexander',
			lastName: 'Schultz',
			instrument: 'multiple and backup vocals'
		},
		denny: {
			firstName: 'Denny',
			lastName: 'Agosto',
			instrument: 'percussion and backup vocals'
		}
	},
	albums: {
		OBPL: {
			title: 'One Big Particular Loop',
			released: '2012',
			songs: '((O.B.P.L. , Dog Radio , Push , Falling in the Rain , Meeting Grey (Cricket) , Pocket Soul , Counting Fish , Cherry Life , New Garden , Danger Signs! , Always Ending In You , Be Too Well (Always) , Doom))'
		}
	},
	formerlyKnownAs: {
		oceana: {
			bandName: 'Oceana',
			location: 'St.Petersburg Florida',
			albums: {
				theTide: {
					title: 'The Tide',
					released: '2008',
					genre: 'post-hardcore',
					songs: 'Intro , The Accountable , Mindless Mindless , The Portrait , The Tide , Come Again? , Hello Astronaut , The Conductor , We Are The Messangers , Escape the Flood , Anthrophobia , Reach For The Sky'
				},
				birthEater: {
					title: 'Birth.Eater',
					released: '2009',
					genre: 'post-hardcore',
					songs: 'Breather II. , The Family Desease , The Constrictor , Dead Speaker , Mother Love , In Birth , Boneworks , The Abortion Plan , Boa , I Came As Dust[I Left As Dust] , The Spine Collection , Devil Walk, God Walk[Heaven Walk, Hell Walk]'
				},
				cleanHead: {
					title: 'Clean Head',
					released: '2010',
					genre: 'Indie Rock',
					songs: 'Blue , Barracuda Capitol of the World , Wool God , Joy'
				}	
			}
		}
	}
}



var genre = document.querySelector('.genre');

var location = document.querySelector('.location');
var members = document.querySelector('.members');
var album = document.querySelector('.album');
var songs = document.querySelector('.songs');
var former = document.querySelector('.former');
var formerAlbum = document.querySelector('.former-album');
var formerSongs = document.querySelector('.former-songs');

var info = document.querySelector('p');


genre.addEventListener('click',function (e){

		info.innerHTML = polyenso.genre;
});

location.addEventListener('click',function (e){
		info.innerHTML = polyenso.location;
});

members.addEventListener('click',function (e){
		info.innerHTML = polyenso.members.firstName + polyenso.members.lastName + polyenso.members.instrument;
});

album.addEventListener('click',function (e){
		info.innerHTML = polyenso.albums.title;
});

songs.addEventListener('click',function (e){
		info.innerHTML = polyenso.albums.songs;
});

former.addEventListener('click',function (e){
		info.innerHTML = polyenso.formerlyKnownAs.bandName;
});

formerAlbum.addEventListener('click',function (e){
		info.innerHTML = polyenso.formerlyKnownAs.albums.title;
});

formerSongs.addEventListener('click',function (e){
		info.innerHTML = polyenso.formerlyKnownAs.albums.theTide.title + polyenso.formerlyKnownAs.albums.theTide.songs;
		info.innerHTML = polyenso.formerlyKnownAs.albums.birthEater.title + polyenso.formerlyKnownAs.albums.birthEater.songs;
		info.innerHTML = polyenso.formerlyKnownAs.albums.cleanHead.title + polyenso.formerlyKnownAs.albums.cleanHead.songs;
});

//for some reason when I try to change the $ over to document.querySelector I get errors and the page can't be found
//same happens when I try to add the jQuery script to the top of my html, similar but different error and page can't be found


