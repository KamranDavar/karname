
export const useGetUserById = (id, users) => {
  const user = users?.find((user) => user.id === id);
  return user;
};
