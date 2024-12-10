import { Box, Grid } from '@mui/material';
import CustomSidebar from './CustomSidebar';

const CustomLayout = ({ navigation, children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/* Sidebar */}
            <CustomSidebar navigation={navigation} />
            
            {/* Main Content */}
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                {children}
            </Box>
        </Box>
    );
};

export default CustomLayout;
