import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class FormServlet extends HttpServlet {
    public void doPost(HttpServletRequest req, HttpServletResponse res)
    throws IOException {
        String name = req.getParameter("name");
        res.getWriter().println("Hello " + name);
    }
}