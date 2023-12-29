export const metadata = {
  title: '  IPHURTS',
  description: 'We write blogs  Digital Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
