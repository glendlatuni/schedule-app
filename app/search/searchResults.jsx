"use server";
import connectMongoDB from "@/libs/mongodb";
import Sch from "@/models/sch";
import { NextResponse } from "next/server";

export default async function searchResult(str) {
  await connectMongoDB();
  let searchTerm = `${str}`;
  const searchRes = await Sch.find({
    $or: [
      {
        name: { $regex: searchTerm }
      },
    ],
  });
  return NextResponse.json({searchRes});
}
