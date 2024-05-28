import { NextRequest } from "next/server"


export async function GET(req:NextRequest){
    const key = process.env.HEFENG_API_KEY
    const city = req.nextUrl.searchParams.get("city")
    const cityData = await fetch(`https://geoapi.qweather.com/v2/city/lookup?location=${city}&key=${key}`).then(r=>r.json())
    const locationId = cityData.location[0].id
    const data = await fetch(`https://devapi.qweather.com/v7/weather/3d?location=${locationId}&key=${key}`,{
        method:"GET"
    }).then(r=>r.json())
    return Response.json(data)
}