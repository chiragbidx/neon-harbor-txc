import "./globals.css";

export const metadata = {
  title: "Garden Shed Rentals",
  description: "Rent garden sheds easily—flexible options for your storage needs. Professional setup and removal. Get your free quote quickly."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui,sans-serif", background: "#fafcfb" }}>
        {children}
      </body>
    </html>
  );
}