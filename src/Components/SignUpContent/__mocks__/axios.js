// axios.js

const axiosMock = {
    post: jest.fn(() => Promise.resolve({ data: {} })),
  };
  
  export default axiosMock;
  