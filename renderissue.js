function renderIssue(d) {
  // console.log(d);

  var key = d.key;
  var base = "http://jira.alm.mentorg.com:8080";
  var url = base + "/rest/api/2/issue/" + key;
  var issueurl = base + "/browse/" + key;
	var summary = d.fields["summary"];
	// var description = d.fields.description;
  var description = d.renderedFields.description;

	// console.log(key);
	// console.log(summary);
	// console.log(description);

  // Build up the HTML
  var panelHeader = '<b><a href="' + issueurl + '" class="external-link" rel="nofollow"><strong>' + key + '</strong></a>' +
' - ' + summary + '</b>';
  var panelBody = '<p>' + description + '</p>';

  var markup = '<div class="panel" style="background-color: white;border-width: 1px;">' +
'<div class="panelHeader" style="border-bottom-width: 1px;background-color: white;">' + panelHeader + '</div>' +
'<div class="panelContent" style="background-color: white;">' + panelBody + '</div>' +
'</div>';

  // console.log(markup);
  AJS.$("#" + key).append(markup);
}