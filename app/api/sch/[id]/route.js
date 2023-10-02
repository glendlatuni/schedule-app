import connectMongoDB from "@/libs/mongodb";
import Sch from "@/models/sch";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
try {
    const { id } = params;

    const {
      newName: name,
      newIds: ids,
      newAddress: address,
      newLeader: leader,
      newLiturgy: liturgy,
      newDate: date,
    } = await request.json();
    await connectMongoDB();
    await Sch.findByIdAndUpdate(id, {
      name,
      ids,
      address,
      leader,
      liturgy,
      date,
    });
    return NextResponse.json({ message: "TOPIC UPDATE" }, { status: 200 });
} catch (error) {
  throw new Error("ERROR" , error)
}
}


export async function GET(request, {params}){
  const {id} = params;
  await connectMongoDB()
  const sch = await Sch.findOne({_id:id});
  return NextResponse.json({sch}, {status: 200})
}
