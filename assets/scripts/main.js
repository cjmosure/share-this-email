var clipboard = new Clipboard('.btn-copy');
clipboard.on('success', function(e) {
    console.log(e);
});

$(function () {
    function download_to_textbox(url, el) {
        $.get(url, null, function (data) {
            el.val(data);
        }, "text");
    }
    download_to_textbox("email/other.html", $("#otherEmail"));
    download_to_textbox("email/mailchimp.html", $("#mailchimpEmail"));
});

var app = angular.module("shareThisEmail", []);