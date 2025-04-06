const devices = [
    {
        id: "1",
        name: "sensor-1",
        temperature: "23 c",
        humidity: "90%",
        lat: 25.243143273449427,
        lng: 55.32663345336914,
        status: "on",
        totalPowerConsumption: "23 kw",
        monthlyPowerConsumption: {
            jan: "24 kw",
            feb: "21 kw",
            mar: "22 kw",
            apr: "28 kw",
            may: "29 kw",
            jun: "31 kw",
            jul: "34 kw",
            aug: "23 kw",
            sep: "44 kw",
            oct: "41 kw",
            nov: "24 kw",
            dec: "21 kw"
        }
    },
    {
        id: "2",
        name: "sensor-2",
        temperature: "21 c",
        humidity: "92%",
        lat: 25.12235,
        lng: 55.37482,
        status: "off",
        totalPowerConsumption: "22 kw",
        monthlyPowerConsumption: {
            jan: "20 kw",
            feb: "22 kw",
            mar: "21 kw",
            apr: "25 kw",
            may: "27 kw",
            jun: "30 kw",
            jul: "28 kw",
            aug: "23 kw",
            sep: "35 kw",
            oct: "33 kw",
            nov: "26 kw",
            dec: "24 kw"
        }
    },
    {
        id: "3",
        name: "sensor-3",
        temperature: "26 c",
        humidity: "85%",
        lat: 25.573139,
        lng: 55.678431,
        status: "on",
        totalPowerConsumption: "25 kw",
        monthlyPowerConsumption: {
            jan: "25 kw",
            feb: "22 kw",
            mar: "20 kw",
            apr: "30 kw",
            may: "32 kw",
            jun: "28 kw",
            jul: "33 kw",
            aug: "27 kw",
            sep: "40 kw",
            oct: "38 kw",
            nov: "30 kw",
            dec: "28 kw"
        }
    },
    {
        id: "4",
        name: "sensor-4",
        temperature: "19 c",
        humidity: "75%",
        lat: 25.235214,
        lng: 55.678301,
        status: "off",
        totalPowerConsumption: "20 kw",
        monthlyPowerConsumption: {
            jan: "19 kw",
            feb: "21 kw",
            mar: "20 kw",
            apr: "22 kw",
            may: "24 kw",
            jun: "28 kw",
            jul: "30 kw",
            aug: "26 kw",
            sep: "32 kw",
            oct: "28 kw",
            nov: "24 kw",
            dec: "22 kw"
        }
    },
    {
        id: "5",
        name: "sensor-5",
        temperature: "28 c",
        humidity: "80%",
        lat: 25.123654,
        lng: 55.768493,
        status: "on",
        totalPowerConsumption: "18 kw",
        monthlyPowerConsumption: {
            jan: "18 kw",
            feb: "20 kw",
            mar: "19 kw",
            apr: "22 kw",
            may: "24 kw",
            jun: "26 kw",
            jul: "28 kw",
            aug: "23 kw",
            sep: "35 kw",
            oct: "33 kw",
            nov: "25 kw",
            dec: "22 kw"
        }
    },
    {
        id: "6",
        name: "sensor-6",
        temperature: "30 c",
        humidity: "92%",
        lat: 25.452677,
        lng: 55.943225,
        status: "off",
        totalPowerConsumption: "26 kw",
        monthlyPowerConsumption: {
            jan: "26 kw",
            feb: "24 kw",
            mar: "28 kw",
            apr: "30 kw",
            may: "32 kw",
            jun: "35 kw",
            jul: "33 kw",
            aug: "31 kw",
            sep: "41 kw",
            oct: "39 kw",
            nov: "35 kw",
            dec: "32 kw"
        }
    },
    {
        id: "7",
        name: "sensor-7",
        temperature: "22 c",
        humidity: "78%",
        lat: 25.712312,
        lng: 55.333333,
        status: "on",
        totalPowerConsumption: "21 kw",
        monthlyPowerConsumption: {
            jan: "23 kw",
            feb: "21 kw",
            mar: "22 kw",
            apr: "24 kw",
            may: "25 kw",
            jun: "27 kw",
            jul: "26 kw",
            aug: "24 kw",
            sep: "31 kw",
            oct: "29 kw",
            nov: "27 kw",
            dec: "23 kw"
        }
    },
    {
        id: "8",
        name: "sensor-8",
        temperature: "20 c",
        humidity: "70%",
        lat: 25.671231,
        lng: 55.478243,
        status: "off",
        totalPowerConsumption: "19 kw",
        monthlyPowerConsumption: {
            jan: "18 kw",
            feb: "19 kw",
            mar: "21 kw",
            apr: "22 kw",
            may: "23 kw",
            jun: "25 kw",
            jul: "28 kw",
            aug: "27 kw",
            sep: "30 kw",
            oct: "31 kw",
            nov: "28 kw",
            dec: "25 kw"
        }
    },
    {
        id: "9",
        name: "sensor-9",
        temperature: "24 c",
        humidity: "88%",
        lat: 25.823131,
        lng: 55.671342,
        status: "on",
        totalPowerConsumption: "28 kw",
        monthlyPowerConsumption: {
            jan: "27 kw",
            feb: "29 kw",
            mar: "28 kw",
            apr: "32 kw",
            may: "34 kw",
            jun: "36 kw",
            jul: "38 kw",
            aug: "31 kw",
            sep: "39 kw",
            oct: "37 kw",
            nov: "33 kw",
            dec: "30 kw"
        }
    },
    {
        id: "10",
        name: "sensor-10",
        temperature: "27 c",
        humidity: "80%",
        lat: 25.934756,
        lng: 55.564723,
        status: "off",
        totalPowerConsumption: "24 kw",
        monthlyPowerConsumption: {
            jan: "26 kw",
            feb: "24 kw",
            mar: "23 kw",
            apr: "27 kw",
            may: "29 kw",
            jun: "31 kw",
            jul: "34 kw",
            aug: "30 kw",
            sep: "32 kw",
            oct: "30 kw",
            nov: "28 kw",
            dec: "26 kw"
        }
    }
];

const bcrypt = require('bcryptjs');

const users = [
    { username: "admin", password: bcrypt.hashSync("admin123", 10), role: "admin" },
    { username: "operator", password: bcrypt.hashSync("operator123", 10), role: "operator" }
];


module.exports = {
    devices,
    users
};
