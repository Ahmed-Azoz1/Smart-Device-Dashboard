import { Marker, Popup } from 'react-leaflet';
import { Typography } from '@mui/material';

const MapMarker = ({ device }) => {
    if (!device.lat || !device.lng) return null;
    
    return (
        <Marker position={[device.lat, device.lng]}>
            <Popup>
                <Typography variant="subtitle2">{device.name}</Typography>
                <Typography variant="body2">Status: {device.status}</Typography>
                <Typography variant="body2">Power: {device.totalPowerConsumption} kWh</Typography>
            </Popup>
        </Marker>
    );
};

export default MapMarker;