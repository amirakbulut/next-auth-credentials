"use client";
export default function Page() {

  const fetchUsers = async (edge: boolean = false) => {
    const url = edge ? '/api/users/edge' : '/api/users';

    try {
      const res = await fetch(url);
      const data = await res.json()

      console.log(data)
    } catch (err) {
      console.error(err);
    }
  }

  return <main>
    <span>Dashboard index</span>
    <button onClick={() => fetchUsers()} className="block border border-white p-3 rounded-md mb-3">Fetch users</button>
    <button onClick={() => fetchUsers(true)} className="block border border-white p-3 rounded-md">Fetch users (edge)</button>
  </main>
}
