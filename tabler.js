function calculateTotals(row){
	var total = row.reduce((x,y) => x+y)
	var operation = Array.from(total.toString()).join("+")
	var total2 = Array.from(total.toString()).reduce((x,y)=> parseInt(y)+parseInt(x))
	var operation2 = Array.from(total2.toString()).join("+")
	var totalFinal = Array.from(total2.toString()).reduce((x,y)=> parseInt(y)+parseInt(x))
	return [total, operation, total2, operation2, totalFinal]
}

function prepareData(result,result2,result3,words){
	var preparedWords = words.split(" ")
	var wordsLength = preparedWords.map((x) => x.length)
	var dataArray = []
	preparedWords.forEach(function organize(word, index){
		var jsondata = {}
		jsondata["Length"] = wordsLength[index]
		jsondata["Word"] = word
		jsondata["G"] = result[index]
		jsondata["P"] = result2[index]
		jsondata["RP"] = result3[index]
		dataArray.push(jsondata)
	})

	var dict = ["First Total","Add To Reduce","Second Total","Reduce to Deduce","Essence of Number"]
	for (var i = 0; i < 5; i++) {
		var jsondata = {}
		jsondata["Length"] = calculateTotals(wordsLength)[i]
		jsondata["Word"] = dict[i]
		jsondata["G"] = calculateTotals(result)[i]
		jsondata["P"] = calculateTotals(result2)[i]
		jsondata["RP"] = calculateTotals(result3)[i]
		dataArray.push(jsondata)
	} 

	return dataArray
}

var jsonData = prepareData(result,result2,result3,words)
