import connectMongoDB from "@/libs/mongodb"
import Sch from "@/models/sch"
import { NextResponse } from "next/server"


export async function POST(request) {
  const { name, kind, address, leader, liturgy, date } = await request.json();
  await connectMongoDB();
  await Sch.create({ name, kind, address, leader, liturgy, date });
  return NextResponse.json({ message: "JADWAL DIBUAT" }, { status: 201 });
}