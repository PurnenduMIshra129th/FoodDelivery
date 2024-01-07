import react from '@vitejs/plugin-react'

const useitforlocal = 'http://localhost:4000';

const generateProxyPath = (path) => ({
  [path]: {
    target: useitforlocal,
    pathRewrite: { [`^${path}`]: '' },
  },
});

export default {
  plugins: [react()],
  server: {
    proxy: {
      ...generateProxyPath('/api/users/signin'),
      ...generateProxyPath('/api/users/signup'),
      ...generateProxyPath('/api/uploads/upload'),
      ...generateProxyPath('/api/products/addProduct'),
      ...generateProxyPath('/api/products/getProduct'),
      ...generateProxyPath('/api/products/deleteProduct'),
      ...generateProxyPath('/api/products/updateProduct'),
      ...generateProxyPath('/api/users/getUsers'),
      ...generateProxyPath('/api/users/deleteUser'),
    },
  },
};

