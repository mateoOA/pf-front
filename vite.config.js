import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = dotenv.config({ path: `./.env.${mode}` }).parsed

  return {
    plugins: [vue()],
    define: {
      ...env
    }
  }
}

