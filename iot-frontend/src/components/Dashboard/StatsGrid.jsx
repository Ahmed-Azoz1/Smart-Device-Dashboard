import { Grid } from '@mui/material';
import DashboardCard from '../ui/DashboardCard';
import StatsCard from './StatsCard';
import { Power as StatusIcon, DeviceThermostat as TemperatureIcon } from '@mui/icons-material';

const StatsGrid = ({ data }) => {
    const extractNumber = (value) => {
        if (!value) return 0;
        const number = parseFloat(value.toString().replace(/[^0-9.-]+/g, ''));
        return isNaN(number) ? 0 : number;
    };

    const totalPower = data.reduce((sum, device) => sum + extractNumber(device.totalPowerConsumption), 0);
    const activeDevices = data.filter(device => device.status === 'on').length;
    const avgTemperature = data.reduce((sum, device) => sum + extractNumber(device.temperature), 0) / data.length;

    const stats = [
        {
            title: 'Total Devices',
            value: data.length,
            icon: StatusIcon,
            color: 'primary',
            progressValue: (data.length / 20) * 100
        },
        {
            title: 'Active Devices',
            value: activeDevices,
            icon: StatusIcon,
            color: 'success',
            progressValue: (activeDevices / data.length) * 100
        },
        {
            title: 'Total Power',
            value: `${totalPower.toFixed(2)} kWh`,
            icon: StatusIcon,
            color: 'warning',
            progressValue: (totalPower / 1000) * 100
        },
        {
            title: 'Avg. Temp',
            value: `${avgTemperature.toFixed(1)}°C`,
            icon: TemperatureIcon,
            color: 'error',
            progressValue: (avgTemperature / 100) * 100
        }
    ];

    return (
        <Grid container spacing={3} justifyContent="center" size={12} sx={{ width: '100%', mb: 3 }}>
            {stats.map((stat, index) => (
                <DashboardCard key={index}>
                    <StatsCard {...stat} />
                </DashboardCard>
            ))}
        </Grid>
    );
};

export default StatsGrid;