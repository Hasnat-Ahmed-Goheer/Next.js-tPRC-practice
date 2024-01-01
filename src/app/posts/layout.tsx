
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Posts</title>
      </head>
      <body>
        <main className="flex flex-row">
          <div className="flex-1">Hello</div>
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
