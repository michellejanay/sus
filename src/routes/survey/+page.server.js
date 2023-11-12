/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    // TODO log the user in
    const response = event.request.body;
    console.log(response);
    // console.log(response.length);
  },
};
