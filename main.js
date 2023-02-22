const express = require('express');
const app = express();

var titulo = 'RSS Test del Tomimi';

app.get('/', ( req, res ) => {
	var rss_str = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>
`;
	rss_str += "<title>" + titulo + "</title>";

	rss_str += `
</channel>
</rss>
`;

	res.send(rss_str);
});

app.listen( 4000, () => {
	console.log( "listening to port 4000" );
});
