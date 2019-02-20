$(document).ready(function() {
$("#blanks form").submit(function(event) {
    event.preventDefault();
  var personInput = $("input#person").val();
  var addressInput= $("input#address").val();
  var dateInput = $("input#date").val();
  var startTimeInput = $("input#start-time").val();
  var endTimeInput = $("input#end-time").val();

    $(".person").text(personInput);
    $(".address").text(addressInput);
    $(".date").text(dateInput);
    $(".start-time").text(startTimeInput);
    $(".end-time").text(endTimeInput);

    $("#confirmation").show();
    $("#blanks").hide();
    $("form").submit(function(e){
                    alert('submit intercepted');
                    e.preventDefault(e);
                });

});
});
