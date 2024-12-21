// import React, { useContext, useState } from 'react';
// import { MyContext } from '../../MyProvider';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import Chip from '@mui/material/Chip';

// const AdminDashboard = () => {
//   const adminData = useContext(MyContext).state.allUsersDetails;
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString();
//   };

//   const handleViewUsage = (user) => {
//     setSelectedUser(user);
//     setIsModalOpen(true);
//   };

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const UsageModal = ({ user, isOpen, onClose }) => {
//     if (!user) return null;

//     return (
//       <Dialog 
//         open={isOpen} 
//         onClose={onClose}
//         maxWidth="sm"
//         fullWidth
//       >
//         <DialogTitle>Usage Details - {user.userEmail}</DialogTitle>
//         <DialogContent>
//           <div style={{ padding: '16px 0' }}>
//             <div style={{ marginBottom: '16px' }}>
//               <h3 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Pincode Table</h3>
//               <p>Available Calls: {user.pincodeTableAvailableCalls}</p>
//               <p>Consumed Calls: {user.pincodeTableConsumedCalls}</p>
//             </div>
//             <div>
//               <h3 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Stock</h3>
//               <p>Available Calls: {user.stockAvailableCalls}</p>
//               <p>Consumed Calls: {user.stockConsumedCalls}</p>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     );
//   };

//   const dateBodyTemplate = (rowData) => {
//     return formatDate(rowData.CREATEDTIME);
//   };

//   const upgradeBodyTemplate = (rowData) => {
//     return (
//       <>
//         <Button
//           variant="outlined"
//           size="small"
//           endIcon={<KeyboardArrowDownIcon />}
//           onClick={handleClick}
//         >
//           Upgrade Plan
//         </Button>
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//         >
//           <MenuItem onClick={handleClose}>Basic Plan</MenuItem>
//           <MenuItem onClick={handleClose}>Pro Plan</MenuItem>
//           <MenuItem onClick={handleClose}>Enterprise Plan</MenuItem>
//         </Menu>
//       </>
//     );
//   };

//   const usageBodyTemplate = (rowData) => {
//     return (
//       <Button
//         variant="outlined"
//         size="small"
//         onClick={() => handleViewUsage(rowData)}
//       >
//         View Usage
//       </Button>
//     );
//   };

//   const trialBodyTemplate = (rowData) => {
//     return (
//       <Chip 
//         label={rowData.freeTrail ? 'Used' : 'Available'}
//         color={rowData.freeTrail ? 'success' : 'warning'}
//         size="small"
//       />
//     );
//   };

//   return (
//     <div style={{ padding: '16px' }}>
//       <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Admin Dashboard</h2>
      
//       <DataTable 
//         value={adminData}
//         paginator 
//         rows={10}
//         rowsPerPageOptions={[5, 10, 25, 50]}
//         tableStyle={{ minWidth: '50rem' }}
//       >
//         <Column 
//           field="index" 
//           header="S.No" 
//           body={(data, options) => options.rowIndex + 1}
//           style={{ width: '5%' }}
//         />
//         <Column 
//           field="CREATEDTIME" 
//           header="Joined Date" 
//           body={dateBodyTemplate}
//           style={{ width: '15%' }}
//         />
//         <Column 
//           field="userEmail" 
//           header="Email" 
//           style={{ width: '25%' }}
//         />
//         <Column 
//           header="Upgrade Plan" 
//           body={upgradeBodyTemplate}
//           style={{ width: '20%' }}
//         />
//         <Column 
//           header="View Usage" 
//           body={usageBodyTemplate}
//           style={{ width: '15%' }}
//         />
//         <Column 
//           field="freeTrail" 
//           header="Free Trial" 
//           body={trialBodyTemplate}
//           style={{ width: '20%' }}
//         />
//       </DataTable>

//       <UsageModal 
//         user={selectedUser}
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </div>
//   );
// };

// export default AdminDashboard;







// import React, { useContext, useState } from 'react';
// import { MyContext } from '../../MyProvider';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import Chip from '@mui/material/Chip';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const AdminDashboard = () => {
//   const { state } = useContext(MyContext);
//   const adminData = state.allUsersDetails;
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedUserEmail, setSelectedUserEmail] = useState(null);
//   const navigate = useNavigate();

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString();
//   };

//   const handleViewUsage = (user) => {
//     setSelectedUser(user);
//     setIsModalOpen(true);
//   };

//   const handleMenuClick = (event, userEmail) => {
//     setAnchorEl(event.currentTarget);
//     setSelectedUserEmail(userEmail);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     setSelectedUserEmail(null);
//   };

//   const applyPlan = (planValue) => {
//     let payload = {
//       email: selectedUserEmail,
//       planValue,
//     };

//     axios
//       .post("/server/api_application_function/userApi", payload)
//       .then((response) => {
//         console.log("response from creating api payment", response.data);
//         Swal.fire({
//           title: "Subscription Successful!",
//           text: "The subscription was updated successfully!",
//           icon: "success",
//           confirmButtonText: "OK",
//         }).then(() => {
//           navigate("/home");
//           window.location.reload();
//         });
//       })
//       .catch((error) => {
//         console.log("error in api creation or payment", error);
//         Swal.fire({
//           title: "Error!",
//           text: "Something went wrong, please try again.",
//           icon: "error",
//           confirmButtonText: "OK",
//         });
//       });
//     handleMenuClose();
//   };

//   const UsageModal = ({ user, isOpen, onClose }) => {
//     if (!user) return null;

//     const chartData = {
//       labels: ['Pincode Table', 'Stock'],
//       datasets: [
//         {
//           label: 'Available Calls',
//           data: [user.pincodeTableAvailableCalls, user.stockAvailableCalls],
//           backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         },
//         {
//           label: 'Consumed Calls',
//           data: [user.pincodeTableConsumedCalls, user.stockConsumedCalls],
//           backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         },
//       ],
//     };

//     const options = {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: 'top',
//         },
//         title: {
//           display: true,
//           text: 'API Usage Statistics',
//         },
//       },
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     };

//     return (
//       <Dialog 
//         open={isOpen} 
//         onClose={onClose}
//         maxWidth="md"
//         fullWidth
//       >
//         <DialogTitle>Usage Details - {user.userEmail}</DialogTitle>
//         <DialogContent>
//           <div style={{ padding: '16px 0' }}>
//             <Bar data={chartData} options={options} />
//           </div>
//         </DialogContent>
//       </Dialog>
//     );
//   };

//   const dateBodyTemplate = (rowData) => {
//     return formatDate(rowData.CREATEDTIME);
//   };

//   const upgradeBodyTemplate = (rowData) => {
//     return (
//       <>
//         <Button
//           variant="outlined"
//           size="small"
//           endIcon={<KeyboardArrowDownIcon />}
//           onClick={(e) => handleMenuClick(e, rowData.userEmail)}
//         >
//           Upgrade Plan
//         </Button>
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl) && selectedUserEmail === rowData.userEmail}
//           onClose={handleMenuClose}
//         >
//           <MenuItem onClick={() => applyPlan(0)}>Basic Plan</MenuItem>
//           <MenuItem onClick={() => applyPlan(2)}>Pro Plan</MenuItem>
//           <MenuItem onClick={() => applyPlan(10)}>Enterprise Plan</MenuItem>
//         </Menu>
//       </>
//     );
//   };

//   const usageBodyTemplate = (rowData) => {
//     return (
//       <Button
//         variant="outlined"
//         size="small"
//         onClick={() => handleViewUsage(rowData)}
//       >
//         View Usage
//       </Button>
//     );
//   };

//   const trialBodyTemplate = (rowData) => {
//     return (
//       <Chip 
//         label={rowData.freeTrail ? 'Used' : 'Available'}
//         color={rowData.freeTrail ? 'success' : 'warning'}
//         size="small"
//       />
//     );
//   };

//   return (
//     <div style={{ padding: '16px' }}>
//       <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Admin Dashboard</h2>
      
//       <DataTable 
//         value={adminData}
//         paginator 
//         rows={10}
//         rowsPerPageOptions={[5, 10, 25, 50]}
//         tableStyle={{ minWidth: '50rem' }}
//       >
//         <Column 
//           field="index" 
//           header="S.No" 
//           body={(data, options) => options.rowIndex + 1}
//           style={{ width: '5%' }}
//         />
//         <Column 
//           field="CREATEDTIME" 
//           header="Joined Date" 
//           body={dateBodyTemplate}
//           style={{ width: '15%' }}
//         />
//         <Column 
//           field="userEmail" 
//           header="Email" 
//           style={{ width: '25%' }}
//         />
//         <Column 
//           header="Upgrade Plan" 
//           body={upgradeBodyTemplate}
//           style={{ width: '20%' }}
//         />
//         <Column 
//           header="View Usage" 
//           body={usageBodyTemplate}
//           style={{ width: '15%' }}
//         />
//         <Column 
//           field="freeTrail" 
//           header="Free Trial" 
//           body={trialBodyTemplate}
//           style={{ width: '20%' }}
//         />
//       </DataTable>

//       <UsageModal 
//         user={selectedUser}
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </div>
//   );
// };

// export default AdminDashboard;









import React, { useContext, useState } from 'react';
import { MyContext } from '../../MyProvider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const { state, setState } = useContext(MyContext);
  const adminData = state.allUsersDetails;
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUserEmail, setSelectedUserEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const handleViewUsage = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleMenuClick = (event, userEmail) => {
    setAnchorEl(event.currentTarget);
    setSelectedUserEmail(userEmail);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedUserEmail(null);
  };

  const updateUserData = (userEmail, planValue) => {
    const updatedUsersDetails = state.allUsersDetails.map(user => {
      if (user.userEmail === userEmail) {
        const additionalCalls = planValue === 0 ? 5 : planValue === 2 ? 10 : 15;
        return {
          ...user,
          pincodeTableAvailableCalls: String(parseInt(user.pincodeTableAvailableCalls) + additionalCalls),
          stockAvailableCalls: String(parseInt(user.stockAvailableCalls) + additionalCalls)
        };
      }
      return user;
    });

    setState(prev => ({
      ...prev,
      allUsersDetails: updatedUsersDetails
    }));
  };

  const applyPlan = async (planValue) => {
    setIsLoading(true);
    let payload = {
      email: selectedUserEmail,
      planValue,
    };

    try {
      const response = await axios.post("/server/api_application_function/userApi", payload);
      console.log("response from creating api payment", response.data);
      
      // Update the state with new values
      updateUserData(selectedUserEmail, planValue);

      Swal.fire({
        title: "Subscription Successful!",
        text: "The subscription was updated successfully!",
        icon: "success",
        confirmButtonText: "OK"
      });
    } catch (error) {
      console.log("error in api creation or payment", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong, please try again.",
        icon: "error",
        confirmButtonText: "OK"
      });
    } finally {
      setIsLoading(false);
      handleMenuClose();
    }
  };

  const UsageModal = ({ user, isOpen, onClose }) => {
    if (!user) return null;

    const chartData = {
      labels: ['Pincode Table', 'Stock'],
      datasets: [
        {
          label: 'Available Calls',
          data: [user.pincodeTableAvailableCalls, user.stockAvailableCalls],
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          label: 'Consumed Calls',
          data: [user.pincodeTableConsumedCalls, user.stockConsumedCalls],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'API Usage Statistics',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    return (
      <Dialog 
        open={isOpen} 
        onClose={onClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Usage Details - {user.userEmail}</DialogTitle>
        <DialogContent>
          <div style={{ padding: '16px 0' }}>
            <Bar data={chartData} options={options} />
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  const dateBodyTemplate = (rowData) => {
    return formatDate(rowData.CREATEDTIME);
  };

  const upgradeBodyTemplate = (rowData) => {
    return (
      <>
        <Button
          variant="outlined"
          size="small"
          endIcon={<KeyboardArrowDownIcon />}
          onClick={(e) => handleMenuClick(e, rowData.userEmail)}
          disabled={isLoading && selectedUserEmail === rowData.userEmail}
        >
          {isLoading && selectedUserEmail === rowData.userEmail ? (
            <CircularProgress size={20} />
          ) : (
            'Upgrade Plan'
          )}
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl) && selectedUserEmail === rowData.userEmail}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => applyPlan(0)}>Basic Plan</MenuItem>
          <MenuItem onClick={() => applyPlan(2)}>Pro Plan</MenuItem>
          <MenuItem onClick={() => applyPlan(10)}>Enterprise Plan</MenuItem>
        </Menu>
      </>
    );
  };

  const usageBodyTemplate = (rowData) => {
    return (
      <Button
        variant="outlined"
        size="small"
        onClick={() => handleViewUsage(rowData)}
      >
        View Usage
      </Button>
    );
  };

  const trialBodyTemplate = (rowData) => {
    return (
      <Chip 
        label={rowData.freeTrail ? 'Used' : 'Available'}
        color={rowData.freeTrail ? 'success' : 'warning'}
        size="small"
      />
    );
  };

  return (
    <div style={{ padding: '16px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Admin Dashboard</h2>
      
      <DataTable 
        value={adminData}
        paginator 
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: '50rem' }}
      >
        <Column 
          field="index" 
          header="S.No" 
          body={(data, options) => options.rowIndex + 1}
          style={{ width: '5%' }}
        />
        <Column 
          field="CREATEDTIME" 
          header="Joined Date" 
          body={dateBodyTemplate}
          style={{ width: '15%' }}
        />
        <Column 
          field="userEmail" 
          header="Email" 
          style={{ width: '25%' }}
        />
        <Column 
          header="Upgrade Plan" 
          body={upgradeBodyTemplate}
          style={{ width: '20%' }}
        />
        <Column 
          header="View Usage" 
          body={usageBodyTemplate}
          style={{ width: '15%' }}
        />
        <Column 
          field="freeTrail" 
          header="Free Trial" 
          body={trialBodyTemplate}
          style={{ width: '20%' }}
        />
      </DataTable>

      <UsageModal 
        user={selectedUser}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AdminDashboard;