import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR('/api/users', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className='min-h-screen flex  bg-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <table className='border-separate border border-green-800 table-fixed'>
          <thead>
            <tr>
              <th className='w-1/2 p-2'>Name</th>
              <th className='w-1/2 p-2'>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td className='border border-green-600 p-2'>{user.email}</td>
                <td className='border border-green-600 p-2'>{user.name}</td>
                <td className='border border-green-600 p-2'>
                  <button className='text-white bg-red-600 hover:bg-red-700 border-rounded p-2'>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
