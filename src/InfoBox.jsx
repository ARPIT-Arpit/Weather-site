import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



export default function InfoBox( {info} ) {

    const INIT_URL = "https://plus.unsplash.com/premium_photo-1666726664307-707a74015ca4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=612x612&w=0&k=20&c=MyYLgJ9NKAGMGh69lTW1r03_f91pozcmrZyPo9Oqcu8=";
    
    const COLD_URL = "https://media.istockphoto.com/id/1289449088/photo/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-everything-after-ice.webp?b=1&s=170667a&w=0&k=20&c=KmUu3hmpzMt22rs0DgfbOtQNbCM0NvycsaOsXGIv8qk="

    const WeatherIcon = info.humidity > 80 ? ThunderstormIcon : ( info.temp > 15 ) ? WbSunnyIcon : AcUnitIcon;

    return (
        <div className="InfoBox">

            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? INIT_URL : ( info.temp > 15 ) ? HOT_URL : COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} <WeatherIcon />
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                <div>Temperature = {info.temp}&deg;C</div>
                <div>Humidity = {info.humidity}</div>
                <div>Min Temp = {info.tempMin}&deg;C</div>
                <div>Max Temp = {info.tempMax}&deg;C</div>
                <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</div>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )

}