import dayjs from 'dayjs';

export const Title = '';

export const Description = '';

export const Host = 'https://example.com';

export const DateNow = dayjs().toISOString();

export const DefaultJsonLd = {
  title: Title,
  description: Description,
  url: Host,
  imageUrl: '',
  updated: DateNow,
};
