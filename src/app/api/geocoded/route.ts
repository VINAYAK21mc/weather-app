import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    const city = searchParams.get("search");
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

    const res = await axios.get(url);

    console.log(res.data)
    return NextResponse.json(res.data);
  } catch (error) {
    console.log("Error fetching geocoded data",error);
    return new Response("Error fetching geocoded data", { status: 500 });
  }
}