import Admin from "../pages/Admin/Admin/Admin";
import Cheque from "../pages/Admin/Cheque/Cheque";
import Company from "../pages/Admin/Company/Company";
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';

const routes = [
    { path: "/admin", name: "admin", component: Admin, icon: PersonIcon },
    { path: "/company", name: "company", component: Company, icon: BusinessIcon },
    { path: "/cheque", name: "cheque", component: Cheque, icon: PaymentIcon },
    { path: "/logout", name: "logout", icon: LogoutIcon },
];

export default routes;