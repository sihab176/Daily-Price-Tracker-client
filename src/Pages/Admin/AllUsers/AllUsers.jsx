import { useQuery, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
// import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import LoadingComponent from "../../../component/Loading/LoadingComponent";
// import useAuth from "../../../hooks/useAuth";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [selectRole, setSelectRole] = useState("");
  const [userId, setUserId] = useState("");
  const [search, setSearch] = useState(".");

  // !✅ Get users  =========================>
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-products"],

    enabled: !!search,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchParams=${search}`);
      setSearch("");
      return res.data;
    },
  });

  // ! handle Update ==========================>
  // useEffect(() => {
  //   if (selectRole && userId) {
  //     const upDateUserRole = async () => {
  //       const res = await axiosSecure.patch(`/users/${userId}`, {
  //         role: selectRole,
  //       });
  //       refetch();
  //       queryClient.invalidateQueries(["my-products"]);
  //       if (res.data) {
  //         console.log(res.data, "success fully");
  //         // toast.success("you successfully update the Role");
  //         Swal.fire({
  //           icon: "success",
  //           title: `You successfully the of ${selectRole}`,
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });
  //       }
  //     };
  //     upDateUserRole();
  //   }
  //   setSelectRole("");
  // }, [selectRole]);

  const handleRoleChange = async (e, userId) => {
    const selectedRole = e.target.value;
    console.log(selectRole, "role");

    const res = await axiosSecure.patch(`/users/${userId}`, {
      role: selectedRole,
    });
    console.log(res.data);
    if (res.data.modifiedCount) {
      refetch();
      queryClient.invalidateQueries(["my-products"]);
      Swal.fire({
        icon: "success",
        title: `Role updated to ${selectedRole}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (isLoading) return <LoadingComponent></LoadingComponent>;
  // http://localhost:3000
  return (
    <>
      <div className="p-6 md:block hidden">
        <h2 className="text-2xl font-bold mb-4">All users</h2>
        <div>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            name="Search"
            placeholder="Search..."
            className="md:w-[550px] py-3 pl-10 px-2 text-sm  border border-sky-600 focus:outline-violet-600"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-base-200">
              <tr>
                <th>User Email</th>
                <th>Role</th>
                <th>Created At</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.email}</td>

                  <td>
                    <p
                      className={`
                  ${user?.role === "user" ? "text-red-500" : ""}
                  ${user?.role === "Vendor" ? "text-yellow-500" : ""}
                  ${user?.role === "Admin" ? "text-green-500" : ""}
                  `}
                    >
                      {user.role}
                    </p>
                  </td>
                  <td>{user?.created_at?.split("T")[0]}</td>

                  <td className="flex gap-2 justify-center">
                    {/* Role=========> */}
                    <select
                      className="select select-bordered input-primary"
                      onClick={() => setUserId(user._id)}
                      onChange={(e) => handleRoleChange(e, user._id)}
                      // onChange={(e) => setSelectRole(e.target.value)}
                      value={selectRole}
                    >
                      <option disabled value="">
                        set role
                      </option>
                      <option value="Admin">Admin</option>
                      <option value="Vendor">Vendor</option>
                    </select>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-gray-400">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* responsive */}
      <div className="p-6 md:hidden block">
        <h2 className="text-2xl font-bold mb-4">All users </h2>
        <div>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            name="Search"
            placeholder="Search..."
            className="md:w-[550px] py-3 pl-10 px-2 text-sm  border border-sky-600 focus:outline-violet-600"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-base-200">
              <tr>
                <th>User Email</th>
                <th>Role</th>
                {/* <th>Created At</th> */}
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.email}</td>

                  <td>
                    <p
                      className={`
                  ${user?.role === "user" ? "text-red-500" : ""}
                  ${user?.role === "Vendor" ? "text-yellow-500" : ""}
                  ${user?.role === "Admin" ? "text-green-500" : ""}
                  `}
                    >
                      {user.role}
                    </p>
                  </td>
                  {/* <td>{user?.created_at?.split("T")[0]}</td> */}

                  <td className="flex gap-2 justify-center">
                    {/* Role=========> */}
                    <select
                      className="select select-bordered input-primary"
                      onClick={() => setUserId(user._id)}
                      onChange={(e) => handleRoleChange(e, user._id)}
                      // onChange={(e) => setSelectRole(e.target.value)}
                      value={selectRole}
                    >
                      <option disabled value="">
                        set role
                      </option>
                      <option value="Admin">Admin</option>
                      <option value="Vendor">Vendor</option>
                    </select>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-gray-400">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
