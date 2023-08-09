import AddContent from '../AddContent/AddContent'

const Dashboard = () => {
  return (
    <div className="h-full overflow-hidden">
      <div className="w-16 h-7 bg-white rounded mb-4" />
      <div className="w-28 h-52 bg-red-200 rounded mb-4" />
      <div className="w-44 h-28 bg-green-400 rounded mb-4" />
      <AddContent />
    </div>
  )
}

export default Dashboard
