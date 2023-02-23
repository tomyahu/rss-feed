const express = require('express');
const app = express();

var title = 'RSS Test del Tomimi';
var link = 'atemo.cl';
var description = "test";

var eventos = [
	{
		'title': 'Capitulo 1: El Completo',
		'link': 'atemo.cl',
		'description': 'test 1'
	},

	{
		'title': 'Capitulo 2: Dos Completos',
		'link': 'atemo.cl',
		'description': 'test 2'
	},
];

app.get('/', ( req, res ) => {
	var rss_str = `
<rss version="2.0">
<channel>
`;
	rss_str += "<title>" + title + "</title>\n";
	rss_str += "<link>" + link + "</link>\n";
	rss_str += "<description>" + description + "</description>\n";

	eventos.forEach( e => {
		rss_str += "<item>\n";
		rss_str += "<title>" + e.title + "</title>\n";
		rss_str += "<link>" + e.link + "</link>\n";
		rss_str += "<description>" + e.description + "</description>\n";
		rss_str += "</item>\n";
	});

	rss_str += `
</channel>
</rss>
`;

	res.set('Content-Type', 'application/rss+xml');
	res.send(rss_str);
});

app.listen( 4000, () => {
	console.log( "listening to port 4000" );
});
