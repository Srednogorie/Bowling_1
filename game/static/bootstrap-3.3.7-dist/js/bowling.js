// Submit post on submit
$("#mybow").on("submit", function(event){
    event.preventDefault();
    console.log("you roll the bow!");  // sanity check
    bowling()
});

var csrftoken = Cookies.get('csrftoken');
function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});



// AJAX for posting
function bowling() {
    console.log("bowling is working!") // sanity check
    //var amount = $("#id_amount").val();
    var button = $("form").attr("id");
    console.log(button)
    $.ajax({
        url: $("#mybow").attr('action'), // the endpoint
        //type : "GET", // http method
        data: {
            button: button
            //amount: amount
        },

        // data sent with the post request

        // handle a successful response
        success : function(json) {
            //console.log(json); // log the returned json to the console
            //console.log("success"); // another sanity check
            console.log(json);
            //$("#total").replaceWith('<td id="total" colspan="21">Your total score is: '+json.total+'</div>');

        },

    })
};
