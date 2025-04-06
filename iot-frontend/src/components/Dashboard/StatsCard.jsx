import React from 'react';
import { Card, CardContent, Stack, Typography, Avatar, LinearProgress } from '@mui/material';

const StatsCard = ({ title, value, icon: Icon, color, progressValue }) => {
    return (
        <Card sx={{
            width: { xs: '100%', sm: '100%', md: 300 }, // استجابة للعرض
            
            boxShadow: 3,
            borderRadius: 2,
            mx: 'auto', }}>
            <CardContent>
                {/* العنوان والشعار */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
                    <Typography variant="h6" color="textSecondary">
                        {title}
                    </Typography>
                    <Avatar sx={{ bgcolor: `${color}.light`, width: 40, height: 40 }}>
                        <Icon sx={{ color: `${color}.dark`, fontSize: 20 }} />
                    </Avatar>
                </Stack>

                {/* القيمة الرئيسية */}
                <Typography variant="h4" sx={{ mt: 1, fontWeight: 'bold' }}>
                {value}
                </Typography>

                {/* شريط التقدم */}
                <LinearProgress
                variant="determinate"
                value={progressValue}
                color={color}
                sx={{
                    mt: 2,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: `${color}.lighter`,
                    '& .MuiLinearProgress-bar': {
                    backgroundColor: `${color}.main`,
                    },
                }}
                />
            </CardContent>
        </Card>
    );
};

export default StatsCard;