import ProfileCart from "./Components/ProfileCart"


function App() {
 let user={
  name:"Md. Jalal S K",
  designation:"Web Developer",
  age:25,
  email:"mdjalal@gmail.com",
  phone: "01722631103",
  address: "Mirpur, Kazipara",
  bloodGroup:"B+",
  image:"https://i.ibb.co/Y7bTD0X/img.jpg"
 }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
    <ProfileCart user={user} />
  </div>
  )
}

export default App
