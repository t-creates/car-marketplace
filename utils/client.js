import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '4hwb0u7a',
  dataset: 'production',
  apiVersion: '2022-08-16',
  useCdn: true,
  token: 'skYLJgXZeDHsn5m0kbVZdqctzz9haAGZK6IQVJgpmGDP3QIigpJXbNbaIlHsKKwVmxKPIbzU7kR1AMVSk81Xch14Eb5SmKCZbqDQlrwJJ9QJY5jaLBdl8LTrpletIOUZT50mxtjfbgkO18h0GQPCM8f7JsXDv9o161sEu0EDOTY43yZAA8cl',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

