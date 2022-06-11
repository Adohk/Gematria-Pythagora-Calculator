var words = "ADDED TO ALL MINUS NONE SHARED BY EVERYTHING MULTIPLIED IN ABUNDANCE"

var alphabetMap = Array.from("abcdefghijklmnopqrstuvwxyz")
function getCharGematria(c){
	c = c.toLowerCase()
	return alphabetMap.indexOf(c) + 1
}

function getWordsGematria(words){
	var split = words.split(" ")
	var resultArray = []
	split.forEach(function(word){
		var wordArray = Array.from(word)
		var wordResult = 0
		wordArray.forEach(function(character){
			wordResult += getCharGematria(character)
		})
		resultArray.push(wordResult)
	})
	return resultArray
}

var pythagoraMap = {
	"1": "ajs",
	"2": "bkt",
	"3": "clu",
	"4": "dmv",
	"5": "enw",
	"6": "fox",
	"7": "gpy",
	"8": "hqz",
	"9": "ir"
}

function getCharPythagora(c){
	c = c.toLowerCase()
	var result = 0
	Object.values(pythagoraMap).forEach(function (letters){
		if(letters.includes(c)){
			result = parseInt(Object.keys(pythagoraMap)[Object.values(pythagoraMap).indexOf(letters)])
		}		
	})
	return result
}

function getWordsPythagora(word){
	var split = words.split(" ")
	var resultArray = []
	split.forEach(function(word){
		var wordArray = Array.from(word)
		var wordResult = 0
		wordArray.forEach(function(character){
			wordResult += getCharPythagora(character)
		})
		resultArray.push(wordResult)
	})
	return resultArray
}

function findTotal(resultArray){
	return resultArray.reduce((a,b) => a+b)
}

function deduce(total){
	return Array.from(String(total), Number).reduce((a,b) => a+b)
}

function deducePythagora(pythagoraResults){
	return pythagoraResults.map(x => { 
		var r = deduce(x)
		if(r>9){
			r = deduce(r)
		}
		return r	
	})
}

function deduceRecurse(total){
	var r = Array.from(String(total), Number).reduce((a,b) => a+b)
	if(r>9){
		return deduceRecurse(r)
	} else {
		var last = r
		return last
	}
	return
}

var result = getWordsGematria(words)
console.log(result)

var result2 = getWordsPythagora(words)
console.log(result2)

var result3 = deducePythagora(result2)
console.log(result3)

console.log("deduce gematria: " + findTotal(result) + " " + deduceRecurse(findTotal(result)))
console.log("deduce pythagora: " + findTotal(result2) + " " + deduceRecurse(findTotal(result2)))
console.log("deduce reduced pythagora: " + findTotal(result3) + " " + deduceRecurse(findTotal(result3)))
