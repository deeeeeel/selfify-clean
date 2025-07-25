// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Selfify</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>
        {`
          html {
            /* Safe-area padding untuk notch iOS */
            padding-top: env(safe-area-inset-top);
            padding-bottom: env(safe-area-inset-bottom);
            padding-left: env(safe-area-inset-left);
            padding-right: env(safe-area-inset-right);
          }
        `}
      </style>
    </>
  );
}
