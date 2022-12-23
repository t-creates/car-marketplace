export const carsQuery = '*[_type == "car"] | order(_createdAt desc)';
export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};
export const userCreatedCarsQuery = (userId) => {
  const query = `*[ _type == 'car' && '_id' == '${userId}'] | order(_createdAt desc)`;
  return query;
};
