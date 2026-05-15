import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SessionServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res)
    throws IOException {
        HttpSession session = req.getSession();
        session.setAttribute("user","Test");
        res.getWriter().println("Session Created");
    }
}