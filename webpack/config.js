const path = require('path');

const base = __dirname + '/..';
const src = path.resolve(base, 'src');
const dist = path.resolve(base, 'build');

module.exports = {
	base,
	src,
	dist
}