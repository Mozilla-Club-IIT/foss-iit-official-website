// sanity.js
import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'nf4ycipc',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-07', 
});
