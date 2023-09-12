async function getData(id) {
  try {
    const res = await fetch(`http://localhost:4000/jadwal/`, {
      next: {
        revalidate: 0,
      },
    });
    return res.json();
  } catch (error) {
    console.log("ERROR");
  }
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function DynamicPage({ params }) {
  const jadwals = await getData(params.id);

  const jadwalFilter = jadwals.filter((jadwalz) => jadwalz.id === params.id);
  console.log(jadwalFilter);

  return (
    <div className="flex flex-col items-center">
      <h1 className="p-10 text-xl font-bold text-center">
        INI JADWAL UNTUK IBADAH{" "}
        <span className="uppercase text-red-500">{params.id}</span>
      </h1>
      <table className=" min-w-full table-auto ">
        <thead className="text-sm font-light ">
          <tr className=" bg-red-500 lg:`bg-slate-700`">
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-200">Name</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-200">Tempat Ibadah</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-200">Hari Tanggal</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-200">Pelayan Firman</span>
            </th>
            <th className="text-sm font-light px-2 py-2">
              <span className="text-gray-200">Liturgi</span>
            </th>
          </tr>
        </thead>
        {jadwalFilter.map((jadwalx, index) => (
          <tbody key={index}>
            <tr>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalx.nama}</span>
              </th>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalx.alamat}</span>
              </th>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalx.hari_tanggal}</span>
              </th>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalx.Pelayan}</span>
              </th>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalx.Liturgi}</span>
              </th>
            </tr>
          </tbody>
        ))}
      </table>

      {/* <div>
        {jadwalFilter.map((jadwalx, index) => (
          <div key={index}>
            <p>{jadwalx.hari_tanggal}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
