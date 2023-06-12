import { Outlet, Link } from 'react-router-dom';
import TopMenu from '/src/Lib/TopMenu/TopMenu';

export default function Root() {
    return (
        <>
            <TopMenu />
            <Outlet />
        </>
    );
}
