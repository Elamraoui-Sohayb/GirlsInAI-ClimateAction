// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({"lengthMenu": [ 5, 25, 50, 75, 100 ], "order": [[ 4, "desc" ]]});
});
