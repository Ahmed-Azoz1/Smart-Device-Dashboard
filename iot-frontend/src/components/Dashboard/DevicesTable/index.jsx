import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import StyledPaper from '../../ui/StyledPaper';
import DeviceTableRow from './DeviceTableRow'; 

const DevicesTable = ({ devices, onRowClick }) => {
    return (
        <StyledPaper>
        <TableContainer sx={{ maxHeight: '60vh', borderRadius: '12px' }}>
            <Table stickyHeader aria-label="devices table">
            <TableHead>
                <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Device</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Status</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Temp</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Humidity</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Power</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="right">Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {devices.map((device) => (
                <DeviceTableRow
                    key={device.id} 
                    device={device} 
                    onClick={() => onRowClick(device.id)} 
                />
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        </StyledPaper>
    );
};

export default DevicesTable;