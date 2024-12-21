// import React, { useState } from 'react';
// import { TabMenu } from 'primereact/tabmenu';
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import 'primeicons/primeicons.css';
// import AdminDashboard from './AdminDashboard';
// import StockDataUpload from '../Forms/StockDataUpload'
// import LoginDetails from '../../LoginDetails/LoginDetails'



// export default function BasicDemo() {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const items = [
//         { label: 'Dashboard', icon: 'pi pi-home' },
//         { label: 'Stock Data Upload', icon: 'pi pi-upload' },
//         { label: 'Login Details', icon: 'pi pi-users' }
//     ];

    
//     const renderContent = () => {
//         switch (activeIndex) {
//             case 0:
//                 return <AdminDashboard />;
//             case 1:
//                 return <StockDataUpload />
//             case 2:
//                 return <LoginDetails />
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="card">
//             <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
//             <div style={{ marginTop: '20px' }}>
//                 {renderContent()}
//             </div>
//         </div>
//     );
// }










import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';
import StockDataUpload from '../Forms/StockDataUpload'
import LoginDetails from '../../LoginDetails/LoginDetails'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';


const TabMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { label: 'Dashboard', icon: '🏠' },
    { label: 'Stock Data Upload', icon: '⬆️' },
    { label: 'Login Details', icon: '👥' }
  ];



  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return <AdminDashboard />;
      case 1:
        return <StockDataUpload />;
      case 2:
        return <LoginDetails />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex border-b">
        {items.map((item, index) => (
          <button
            key={item.label}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 
              ${activeIndex === index 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'}`}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
      
      <div className="mt-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabMenu;