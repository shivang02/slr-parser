


function formatGrammar(grammar) {
	var result = '';
	if (typeof(Item) != 'undefined') {
		result += "<div align='center'><b>SLR Parsing - Enter the Grammar Production Set including the augmented grammar (Ex: E' -> E). <br>(For ε write '')</b></div><br>";
	}
	result += "<table align='center'><tbody><tr>";
	result += "<td><textarea class='form-control' rows='10' style=\"text-align: right; border: 0; color: black; background-color: #F0F0F0\" id=\"ruleIndices\" rows=\"25\" cols=\"3\" readonly=\"true\">";
	result += "</textarea></td>";
	result += "<td><textarea class='form-control' rows='10' id=\"grammar\" rows=\"25\" cols=\"20\" onfocus=\"$('ruleIndices').value = ''\" onblur=\"displayRuleIndices();\" onchange=\"grammarChanged();\">";
	
	for (var i in grammar.rules) {
		result += grammar.rules[i] + "\n";
	}
	
	result += "</textarea></td>";
	result += "</tr></tbody></table>";

	result += "<br><div class='alert alert-info'><strong>Obs.:</strong> After entering the Production Set, the production numbering is performed automatically.</div>";
	
	return result;
}



function displayRuleIndices() {
	var rules = $element('grammar').value.split('\n');
	var ruleIndex = 0;
	
	$element('ruleIndices').value = "";
	
	for (var i in rules) {
		if (rules[i].trim() != '') {
			$element('ruleIndices').value += "(" + (ruleIndex++) + ")";
		}
		
		$element('ruleIndices').value += "\n";
	}
}




function formatFirstFollow(grammar) {
	var result = "<table class='table table-bordered'>";
	
	if (Item.prototype.grammarType == 'SLR') {
		result += "<thead><tr><th colspan=\"3\">First / Follow </th></tr><tr><th>Non-terminal</th><th>FIRST</th><th>FOLLOW</th></thead>"
		result += "<tbody>";
		
		for (var i in grammar.nonterminals) {
			var nonterminal = grammar.nonterminals[i];
			
			result += "<tr><td>" + nonterminal + "</td><td>{" + grammar.firsts[nonterminal] + "}</td><td>{" + grammar.follows[nonterminal] + "}</td></tr>";
		}
	} else {
		result += "<thead><tr><th colspan=\"2\">First</th></tr><tr><th>Non-terminal</th><th>FIRST</th></thead>"
		result += "<tbody>";
		
		for (var i in grammar.nonterminals) {
			var nonterminal = grammar.nonterminals[i];
			
			result += "<tr><td>" + nonterminal + "</td><td>{" + grammar.firsts[nonterminal] + "}</td></tr>";
		}
	}
	
	result += "</tbody>"
	result += "</table>";
	
	return result;
}