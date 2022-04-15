/**
 * Layout Client
 * Path : /
 * 1. /main
 * 2. /login
 * 3. /contact
 * Component
 * 1. not found data
 * 2. Navbar header
 * 3. footer
 * 4. search
 * 5. Table Detail
 * Layout Admin
 * Path : /admin
 * 1. /admin
 * 2. /company
 * 3. /cheque
 * 4. /logout
 * Component
 * 1. Sidebar
 * 2. Navbar header
 * 3. Tab1 control (Form create admin)
 * 4. Tab1 control (Table admin)
 * 5. Tab2 control (Form create company)
 * 6. Tab2 control (Table company)
 * 7. Tab3 control (Form create cheque)
 * 8. Tab3 control (Table cheque)
 * 9. search admin and filter
 * 10. search company and filter
 * 11. search cheque and filter
 * 12. Modal Form Edit Delete admin
 * 13. Modal Form Edit Delete company
 * 14. Modal Form Edit Delete cheque
 */
const routes = [
    { path: "/main" },
    { path: "/login" },
    { path: "/contact" },
    { path: "/admin" },
    { path: "/company" },
    { path: "/cheque" },
    { path: "/logout"},
];

export default routes;