import React from 'react';
import { useQuery } from 'react-query';
import { Box, Grid, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getDevices } from '../lib/api';


import LoadingState from '../components/shared/LoadingState';
import ErrorState from '../components/shared/ErrorState';
import EmptyState from '../components/shared/EmptyState';


import DashboardHeader from '../components/dashboard/DashboardHeader';
import StatsGrid from '../components/dashboard/StatsGrid';
import DevicesTable from '../components/dashboard/DevicesTable';
import DevicesMap from '../components/dashboard/DevicesMap';
import PowerPieChart from '../components/dashboard/PowerPieChart';

const HomePage = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // جلب بيانات الأجهزة
    const { data, isLoading, isError, error, refetch } = useQuery('devices', getDevices, {
        refetchOnWindowFocus: false,
        staleTime: 300000,
        onError: (error) => {
            if (error.message === 'No token found. Please log in.') {
                // إذا لم يكن هناك توكن، قم بتوجيه المستخدم إلى صفحة تسجيل الدخول
                navigate('/login');
            }
        },
    });
    

    // حالات التحميل والخطأ
    if (isLoading) return <LoadingState message="Loading devices..." />;
    if (isError) return <ErrorState error={error} onRetry={refetch} />;
    if (!data || data.length === 0) return <EmptyState 
        actionText="Add First Device"
        onAction={() => navigate('/devices/new')}
    />;

    return (
        <Box sx={{ p: isMobile ? 2 : 3 }}>
            {/* رأس الصفحة */}
            <DashboardHeader 
                title="Device Dashboard" 
                onRefresh={refetch} 
            />

            {/* إحصائيات الأجهزة */}
            <StatsGrid data={data}  />

            {/* جدول الأجهزة */}
            <Grid size={{ xs: 12, lg: 12 }} sx={{ mb: 3 }}>
                <DevicesTable 
                devices={data} 
                onRowClick={(id) => navigate(`/device/${id}`)}
                />
            </Grid>

                {/* الخريطة والمخطط الدائري */}
            <Grid container columns={12} spacing={3}>
                {/* خريطة الأجهزة */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <DevicesMap devices={data} isMobile={isMobile} />
                </Grid>

                {/* مخطط توزيع الطاقة */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <PowerPieChart data={data}/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomePage;