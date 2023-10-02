import EditJdwl from "@/app/components/EditJdwl";

const getJadwalById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/sch/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to Fetch Topics");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopics({ params }) {
  const { id } = params;
  const JadwalUpdate = await getJadwalById(id);
  const {name, ids, address, leader, liturgy, date} = JadwalUpdate.sch;

  console.log("kode ", JadwalUpdate.sch);

  return (
    <div>
      <EditJdwl
        id={id}
        name={name}
        ids={ids}
        address={address}
        leader={leader}
        liturgy={liturgy}
        date={date}
      />
    </div>
  );
}
