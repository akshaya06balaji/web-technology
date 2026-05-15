import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class CookieServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res)
    throws IOException {
        Cookie c = new Cookie("theme","dark");
        res.addCookie(c);
        res.getWriter().println("Cookie Set");
    }
}