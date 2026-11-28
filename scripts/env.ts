const liffId = process.env['LIFF_ID'];
if (!liffId) {
  console.error('LIFF_ID is required. Copy .env.development.example to .env.development and set it.');
  process.exit(1);
}

export const buildDefines = {
  __LIFF_ID__: JSON.stringify(liffId),
} as const;
