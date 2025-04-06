import React, { useState, useEffect } from 'react';
import {
    Grid,
    Paper,
    Card,
    CardContent,
    Typography,
    Stack,
    Chip,
    Box,
    CircularProgress,
} from '@mui/material';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ReferenceLine,
} from 'recharts';
import { styled } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PowerIcon from '@mui/icons-material/Power';
import { green, red, blue, orange } from '@mui/material/colors';
import { getDeviceDetails } from '../lib/api';
import { useParams } from 'react-router-dom';

const StyledIcon = styled('span')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
    }));

    const extractNumber = (value) => {
    if (!value) return 0;
    const number = parseFloat(value.replace(/[^0-9.-]+/g, ''));
    return isNaN(number) ? 0 : number;
    };

    const DeviceDetailsPage = () => {
    const [deviceData, setDeviceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchDevice = async () => {
        try {
            const rawData = await getDeviceDetails(id); 

            const processedData = {
            ...rawData,
            temperature: extractNumber(rawData.temperature),
            humidity: extractNumber(rawData.humidity),
            totalPowerConsumption: extractNumber(rawData.totalPowerConsumption),
            monthlyPowerConsumption: Object.entries(rawData.monthlyPowerConsumption || {}).map(
                ([month, consumption]) => ({
                month,
                consumption: extractNumber(consumption),
                })
            ),
            };

            setDeviceData(processedData);
            setLoading(false);
        } catch (err) {
            console.error('Error:', err);
            setError(err.message || 'An error occurred while fetching data.');
            setLoading(false);
        }
        };

        fetchDevice();
    }, []);

    if (loading) {
        return (
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            }}
        >
            <CircularProgress size={60} thickness={5} />
        </Box>
        );
    }

    if (error) {
        return (
        <Typography variant="h5" color="error" align="center" sx={{ mt: 5 }}>
            <ErrorOutlineIcon sx={{ fontSize: 40, mr: 1 }} />
            {error}
        </Typography>
        );
    }

    if (!deviceData) {
        return (
        <Typography variant="h5" color="textSecondary" align="center" sx={{ mt: 5 }}>
            No device data found
        </Typography>
        );
    }

    return (
        <Grid container spacing={3} justifyContent="center" sx={{ p: 3 }}>
        <Grid size={{ xs: 12 ,md: 10 }} >
            <Paper
            elevation={6}
            sx={{
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
            }}
            >
            <Card>
                <CardContent>
                <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {deviceData.name} - Monthly Power Consumption
                </Typography>

                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                    <StyledIcon>
                    <DeviceThermostatIcon sx={{ color: red[500] }} />
                    </StyledIcon>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: red[500] }}>
                    {deviceData.temperature}°C
                    </Typography>

                    <StyledIcon>
                    <WaterDropIcon sx={{ color: blue[500] }} />
                    </StyledIcon>
                    <Typography variant="h5" sx={{ color: blue[500] }}>
                    {deviceData.humidity}%
                    </Typography>

                    <Chip
                    label={deviceData.status}
                    color={deviceData.status === 'on' ? 'success' : 'error'}
                    size="small"
                    sx={{ fontWeight: 'bold' }}
                    />
                </Stack>

                <Stack direction="column" spacing={1} sx={{ mb: 3 }}>
                    <Stack direction="row" alignItems="center">
                    <StyledIcon>
                        <LocationOnIcon sx={{ color: orange[500] }} />
                    </StyledIcon>
                    <Typography variant="body1" color="textSecondary">
                        Location: {deviceData.lat}, {deviceData.lng}
                    </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center">
                    <StyledIcon>
                        <PowerIcon sx={{ color: green[500] }} />
                    </StyledIcon>
                    <Typography variant="body1" color="textPrimary" sx={{ fontWeight: 'bold' }}>
                        Total Power Consumption: {deviceData.totalPowerConsumption} kW
                    </Typography>
                    </Stack>
                </Stack>

                <Box sx={{ width: '100%', height: 400, position: 'relative' }}>
                    {deviceData.monthlyPowerConsumption.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                        data={deviceData.monthlyPowerConsumption}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis
                            dataKey="month"
                            tick={{ fontSize: 12, fill: '#333' }}
                            axisLine={false}
                        />
                        <YAxis
                            tick={{ fontSize: 12, fill: '#333' }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd' }}
                            cursor={{ fill: 'rgba(130, 130, 130, 0.2)' }}
                        />
                        <Legend verticalAlign="top" height={36} />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar
                            dataKey="consumption"
                            fill={green[500]}
                            barSize={30}
                            radius={[5, 5, 0, 0]}
                            animationDuration={500}
                        />
                        </BarChart>
                    </ResponsiveContainer>
                    ) : (
                    <Typography variant="body1" color="textSecondary" align="center">
                        No data available for the chart.
                    </Typography>
                    )}
                </Box>
                </CardContent>
            </Card>
            </Paper>
        </Grid>
        </Grid>
    );
};

export default DeviceDetailsPage;
