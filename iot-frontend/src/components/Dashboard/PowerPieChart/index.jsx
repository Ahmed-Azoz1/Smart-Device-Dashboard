import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { PieChart as PieChartIcon } from '@mui/icons-material';
import StyledPaper from '../../ui/StyledPaper';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PowerPieChart = ({ data }) => {
    const extractNumber = (value) => {
        if (!value) return 0;
        const number = parseFloat(value.toString().replace(/[^0-9.-]+/g, ''));
        return isNaN(number) ? 0 : number;
    };

    // التحقق من صحة البيانات
    if (!data || data.length === 0) {
        return (
        <StyledPaper sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="body1" color="textSecondary">
                No data available.
            </Typography>
            </Box>
        </StyledPaper>
        );
    }

    // تحويل البيانات
    const pieData = data.map((device, index) => ({
        name: device.name,
        value: extractNumber(device.totalPowerConsumption),
        color: `hsl(${Math.random() * 360}, 70%, 50%)`,
    }));

    return (
        <StyledPaper sx={{ width: '100%', height: '100%'}}>
            {/* العنوان */}
            <Box sx={{ p: 2, borderBottom: `1px solid divider` }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                <PieChartIcon color="primary" />
                <Typography variant="h6">Power Distribution</Typography>
                </Stack>
            </Box>

            {/* المخطط الدائري */}
            <Box sx={{ height: '300px', p: 2 , display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <PieChart width={300} height={300}>
                <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                    {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value} kWh`, name]} />
                    <Legend />
                </PieChart>
            </Box>
        </StyledPaper>
    );
};

export default PowerPieChart;
