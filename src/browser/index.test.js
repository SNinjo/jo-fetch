/* eslint-disable no-undef */
import fs from 'fs';
eval(
	fs.readFileSync('./build/browser.js')
		.toString()
		.match(/\)\s*{([\d\D]*)}\s*\)\s*\(/)[1]
);
const joFetch = module.exports;
const { fetchInTime, fetchDocument} = module.exports;


test('import functions from jo-fetch', () => {
	expect(typeof joFetch).toBe('function')
	expect(typeof fetchDocument).toBe('function')
	expect(typeof fetchInTime).toBe('function')
})