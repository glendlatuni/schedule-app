import connectMongoDB from "@/libs/mongodb";
import Sch from "@/models/sch";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
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
  await Sch.findByIdAndUpdate(_id, {
    name,
    ids,
    address,
    leader,
    liturgy,
    date,
  });
  return NextResponse.json({ message: "TOPIC UPDATE" }, { status: 200 });
}
