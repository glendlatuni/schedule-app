

async function getData() {
  try {
    const res = await fetch(`http://localhost:4000/jadwal/`, {
      next: {
        revalidate: 0,
      },
    });
    return res.json();
  } catch (error) {
    throw new error(error);
  }
}

export default async function dynamicPage({ params }) {
  const jadwals = await getData(params.id);
  console.log(jadwals);
  const jadwalFilter = jadwals.filter((jadwalz) => jadwalz.id === params.id);
  return (
    <div className="flex flex-col items-center">
      <h1 className="p-10 text-xl font-bold text-center">
        INI JADWAL UNTUK IBADAH{" "}
        <span className="uppercase text-red-500">{params.id}</span>
      </h1>
      <table className=" min-w-full table-auto ">
        <thead className="text-sm font-light ">
          <tr className=" bg-red-500 lg:bg-slate-700">
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
        <tbody>
          {jadwalFilter.map((jadwalz, index) => (
            // eslint-disable-next-line react/jsx-key
            <tr key={index}>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalz.nama}</span>
              </th>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalz.alamat}</span>
              </th>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalz.hari_tanggal}</span>
              </th>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalz.Pelayan}</span>
              </th>
              <th className="text-sm font-light px-2 py-2">
                <span className="text-gray-900">{jadwalz.Liturgi}</span>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
