/*Create a function called shortcut to remove all the lowercase vowels in a given string. */

function shortcut(word){
		word = word.replace(/\a/g, '');
		word= word.replace(/\e/g, '');
		word = word.replace(/\i/g, '');
		word = word.replace(/\o/g, '');
		word = word.replace(/\u/g, '');
		console.log(word);
}


shortcut('goodbye'); 
