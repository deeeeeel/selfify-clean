export const metadata = {
  title: "Selfify — Amplify Your Self",
  description: "Kenal, dengar, dan perkuat versi lo yang sebenarnya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
