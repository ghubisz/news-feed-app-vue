const sanityClient = require('@sanity/client')
const client = sanityClient({
    projectId: 'h5hjhpbu',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
})

export default client