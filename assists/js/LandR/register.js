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
