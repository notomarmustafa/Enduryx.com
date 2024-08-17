@Override
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    String username = request.getParameter("username");
    String password = request.getParameter("password");
    String confirm_password = request.getParameter("confirm_password");

    // Check if the username is already taken.
    if (users.containsKey(username)) {
        response.sendRedirect("signup?error=username_taken");
        return;
    }

    // Check if the passwords match.
    if (!password.equals(confirm_password)) {
        response.sendRedirect("signup?error=passwords_dont_match");
        return;
    }

    // Add the user to the `users` map.
    users.put(username, password);

    // Redirect the user to the login page.
    response.sendRedirect("login");
}






// Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}
