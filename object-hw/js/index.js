var polyenso = {
	bandName: 'Polyenso',
	genre: 'indie rock, electronic, folk, jazz, hip-hop',
	where: 'St.Petersburg, Florida',
	members: {
		brennan: {
			firstName: 'Brennan ',
			lastName: 'Taulbee',
			instrument: ', lead vocals and keyboard'
		},
		alex: {
			firstName: 'Alexander ',
			lastName: 'Schultz',
			instrument: ', multiple and backup vocals'
		},
		denny: {
			firstName: 'Denny ',
			lastName: 'Agosto',
			instrument: ', percussion and backup vocals'
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
			where: 'St.Petersburg Florida',
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
					title: 'Clean Head EP',
					released: '2010',
					genre: 'Indie Rock',
					songs: 'Blue , Barracuda Capitol of the World , Wool God , Joy'
				}	
			}
		}
	}
}



var genre = document.querySelector('.genre');

var where = document.querySelector('.location');
var members = document.querySelector('.members');
var album = document.querySelector('.album');
var songs = document.querySelector('.songs');
var former = document.querySelector('.former');
var formerAlbum = document.querySelector('.former-album');
var formerSongs = document.querySelector('.former-songs');

var info = document.querySelector('p');
var line1 = document.querySelector('.line-1');
var line2 = document.querySelector('.line-2');
var line3 = document.querySelector('.line-3');


genre.addEventListener('click',function (e){
		info.innerHTML = polyenso.genre;
});

where.addEventListener('click',function (e){
		info.innerHTML = polyenso.where;
});

members.addEventListener('click',function (e){
		line1.innerHTML = polyenso.members.brennan.firstName + polyenso.members.brennan.lastName + polyenso.members.brennan.instrument;
		line2.innerHTML = polyenso.members.alex.firstName + polyenso.members.alex.lastName + polyenso.members.alex.instrument;
		line3.innerHTML = polyenso.members.denny.firstName + polyenso.members.denny.lastName + polyenso.members.denny.instrument;
});

album.addEventListener('click',function (e){
		info.innerHTML = polyenso.albums.OBPL.title;
});

songs.addEventListener('click',function (e){
		info.innerHTML = polyenso.albums.OBPL.songs;
});

former.addEventListener('click',function (e){
		info.innerHTML = polyenso.formerlyKnownAs.oceana.bandName;
});

formerAlbum.addEventListener('click',function (e){
		line1.innerHTML = polyenso.formerlyKnownAs.oceana.albums.theTide.title;
		line2.innerHTML = polyenso.formerlyKnownAs.oceana.albums.birthEater.title;
		line3.innerHTML = polyenso.formerlyKnownAs.oceana.albums.cleanHead.title;
});

formerSongs.addEventListener('click',function (e){
		line1.innerHTML = polyenso.formerlyKnownAs.albums.theTide.title + polyenso.formerlyKnownAs.albums.theTide.songs;
		line2.innerHTML = polyenso.formerlyKnownAs.albums.birthEater.title + polyenso.formerlyKnownAs.albums.birthEater.songs;
		line3.innerHTML = polyenso.formerlyKnownAs.albums.cleanHead.title + polyenso.formerlyKnownAs.albums.cleanHead.songs;
});

// for some reason when I try to change the $ over to document.querySelector I get errors and the page can't be found
// same happens when I try to add the jQuery script to the top of my html, similar but different error and page can't be found


