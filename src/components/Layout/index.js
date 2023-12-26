import './index.scss'
import Sidebar from '../SideBar';
import { Outlet } from 'react-router-dom';
const Layout = ()=>{
    return(
        <div className="app">
        <Sidebar/>
        <div className="page">
        <span className="tags top-tags">
        &lt;body&gt;
        </span>
        <Outlet/>
        <span className="tags bottom-tags">
        &lt;/body&gt;
        <br />
        <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
        </div>
        </div>
        
    );
}
export default Layout;