// eslint-disable-next-line react/prop-types
const ProfileCart = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  const { name, designation, age, email, phone, address, bloodGroup, image } =
    user;
  // console.log(user)
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="avatar mx-auto py-5 flex flex-col">
        <div className="w-40 rounded-full">
          <img src={image} />
        </div>
        <p className="text-center mt-2">{designation}</p>
      </div>
      <hr />
      <div className="card-body">
        <ul>
          <li className="w-full mt-3">
            <span className="font-bold me-2 inline-block w-1/3">Name</span>:{" "}
            {name}
          </li>

          <li className="w-full mt-3">
            <span className="font-bold me-2 inline-block w-1/3">Age</span>:{" "}
            {age}
          </li>

          <li className="w-full mt-3">
            <span className="font-bold me-2 inline-block w-1/3">Email</span>:{" "}
            {email}
          </li>

          <li className="w-full mt-3">
            <span className="font-bold me-2 inline-block w-1/3">Phone</span>:{" "}
            {phone}
          </li>

          <li className="w-full mt-3">
            <span className="font-bold me-2 inline-block w-1/3">Address</span>:{" "}
            {address}
          </li>

          <li className="w-full mt-3">
            <span className="font-bold me-2 inline-block w-1/3">
              Blood Group
            </span>
            : {bloodGroup}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCart;
