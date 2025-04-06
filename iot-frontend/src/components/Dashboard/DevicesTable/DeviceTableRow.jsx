import { TableRow as MuiTableRow } from '@mui/material'
import { TableCell, Typography, Button, Stack } from '@mui/material';
import { DeviceThermostat as TemperatureIcon, Water as HumidityIcon, Info as DetailsIcon } from '@mui/icons-material';
import StatusBadge from '../../ui/StatusBadge';

const DeviceTableRow = ({ device, onClick }) => {
  const extractNumber = (value) => {
    if (!value) return 0;
    const number = parseFloat(value.toString().replace(/[^0-9.-]+/g, ''));
    return isNaN(number) ? 0 : number;
  };

  return (
    <MuiTableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      
      <TableCell component="th" scope="row">
        <Typography fontWeight={600}>{device.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          ID: {device.id}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <StatusBadge 
          status={device.status} 
          label={device.status} 
        />
      </TableCell>
      <TableCell align="center">
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
          <TemperatureIcon color="error" fontSize="small" />
          <Typography>{extractNumber(device.temperature)}°C</Typography>
        </Stack>
      </TableCell>
      <TableCell align="center">
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
          <HumidityIcon color="info" fontSize="small" />
          <Typography>{extractNumber(device.humidity)}%</Typography>
        </Stack>
      </TableCell>
      <TableCell align="center">
        <Typography fontWeight={600}>
          {extractNumber(device.totalPowerConsumption)} kWh
        </Typography>
      </TableCell>
      <TableCell align="right">
        <Button
          variant="outlined"
          size="small"
          startIcon={<DetailsIcon />}
          onClick={onClick}
        >
          Details
        </Button>
      </TableCell>
    </MuiTableRow>
  );
};

export default DeviceTableRow;