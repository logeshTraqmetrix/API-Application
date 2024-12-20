import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import AdminDashboard from './AdminDashboard';
import StockDataUpload from '../Forms/StockDataUpload'
import LoginDetails from '../../LoginDetails/LoginDetails'



export default function BasicDemo() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        { label: 'Dashboard', icon: 'pi pi-chart-line' },
        { label: 'Stock Data Upload', icon: 'pi pi-chart-line' },
        { label: 'Login Details', icon: 'pi pi-chart-line' }
    ];

    
    const renderContent = () => {
        switch (activeIndex) {
            case 0:
                return <AdminDashboard />;
            case 1:
                return <StockDataUpload />
            case 2:
                return <LoginDetails />
            default:
                return null;
        }
    };

    return (
        <div className="card">
            <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            <div style={{ marginTop: '20px' }}>
                {renderContent()}
            </div>
        </div>
    );
}
