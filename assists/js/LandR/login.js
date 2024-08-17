import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/test.html")
public class LoginServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Check if the user is already logged in.
        if (request.getSession().getAttribute("username") != null) {
            response.sendRedirect("home");
            return;
        }

        // Check if the username and password are valid.
        Map<String, String> users = new HashMap<>();
        users.put("username1", "password1");
        users.put("username2", "password2");

        if (!users.containsKey(username) || !users.get(username).equals(password)) {
            response.sendRedirect("login?error=invalid");
            return;
        }

        // Login the user.
        request.getSession().setAttribute("username", username);
        response.sendRedirect("home");
    }

}
