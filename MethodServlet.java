import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class MethodServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res)
    throws IOException {
        res.getWriter().println("GET called");
    }
    public void doPost(HttpServletRequest req, HttpServletResponse res)
    throws IOException {
        res.getWriter().println("POST called");
    }
}