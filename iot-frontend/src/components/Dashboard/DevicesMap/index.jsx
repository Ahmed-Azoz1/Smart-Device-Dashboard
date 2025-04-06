import { Box, Stack, Typography } from '@mui/material';
import { LocationOn as LocationIcon } from '@mui/icons-material';
import StyledPaper from '../../ui/StyledPaper';
import { MapContainer, TileLayer } from 'react-leaflet';
import MapMarker from './MapMarker';

const DevicesMap = ({ devices, isMobile }) => {
    return (
        <StyledPaper sx={{ height: '400px', overflow: 'hidden' ,width: '100%'}}>
            <Box sx={{ p: 2, borderBottom: `1px solid divider` }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                <LocationIcon color="primary" />
                <Typography variant="h6">Devices Location</Typography>
                </Stack>
            </Box>
            <Box sx={{ height: 'calc(100% - 56px)', position: 'relative' }}>
                <MapContainer
                center={[devices[0]?.lat || 25.243143273449427, devices[0]?.lng || 55.32663345336914]}
                zoom={isMobile ? 10 : 13}
                style={{ height: '100%', width: '100%' }}
                >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {devices.map((device) => (
                    <MapMarker key={device.id} device={device} />
                ))}
                </MapContainer>
            </Box>
        </StyledPaper>
    );
};

export default DevicesMap;