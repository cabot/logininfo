$(function() {

    var loginInfo = localStorage.getItem("loginInfoCookie"),
		loginInfoBox = "#login_popup",
		phpbbWrapper = "#darkenwrapper";

	if (loginInfo) {
		$(loginInfoBox).css("display", "none");
	} else {
		$(phpbbWrapper + ", " + loginInfoBox).fadeIn(300);
	}

	$("#login_popup_close").click(function() {
		$(phpbbWrapper + ", " + loginInfoBox).fadeOut(300);
		localStorage.setItem("loginInfoCookie", "sushi");
	});
	
});