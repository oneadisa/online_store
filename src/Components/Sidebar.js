import React from 'react';
import { Nav } from 'react-bootstrap';
import './public/styles.css'

const Side = () => (
    <>

        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>

    </>
);
  const Sidebar = withRouter(Side);
  export default Sidebar;

function withRouter (Side: (props: any) => JSX.Element): void
{
    throw new Error('Function not implemented.');
}
