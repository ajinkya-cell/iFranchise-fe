import "./globals.css";
import { Inter, Outfit, Playfair_Display } from "next/font/google";

const inter = Outfit({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={inter.className}>{children}</div>
      </body>
    </html>
  );
}