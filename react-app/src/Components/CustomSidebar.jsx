import { useState } from 'react';
import { Box, List, ListItem, ListItemText, Divider, Drawer } from '@mui/material';
import { Dashboard, ShoppingCart, BarChart, Description, Layers } from '@mui/icons-material';

const CustomSidebar = ({ navigation }) => {
    const [open, setOpen] = useState(false);
  
    return (
        <Drawer open={open} onClose={() => setOpen(false)} variant="temporary">
            <Box sx={{ width: 250 }} role="presentation">
                <List>
                    {navigation.map((item, index) => {
                        if (item.kind === 'header') {
                            return (
                                <ListItem key={index}>
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            );
                        } else if (item.kind === 'divider') {
                            return <Divider key={index} />;
                        } else {
                            return (
                                <ListItem button key={item.segment}>
                                    {item.icon}
                                    <ListItemText primary={item.title} />
                                </ListItem>
                            );
                        }
                    })}
                </List>
            </Box>
        </Drawer>
    );
};

export default CustomSidebar;
