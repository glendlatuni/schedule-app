import connectMongoDB from "@/libs/mongodb";
import Sch from "@/models/sch";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, ids, address, leader, liturgy, date } = await request.json();
    await connectMongoDB();
    await Sch.create({ name, ids, address, leader, liturgy, date });
    return NextResponse.json({ message: "JADWAL DIBUAT" }, { status: 201 });
  } catch (error) {
    console.log("GAGAL:", error);
    return NextResponse.json({ message: "TERAJDI KESALAHAN" });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const sch = await Sch.find();
    return NextResponse.json({ sch });
  } catch (error) {
    console.log("GAGAL:", error);
    return NextResponse.json({ message: "TERAJDI KESALAHAN" });
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    console.log(id)
    await Sch.findByIdAndDelete(id);
    return NextResponse.json({ message: "JADWAL DIHAPUS" }, { status: 200 });
  } catch (error) {
    console.log("GAGAL:", error);
    return NextResponse.json({ message: "TERAJDI KESALAHAN" });
  }
}
