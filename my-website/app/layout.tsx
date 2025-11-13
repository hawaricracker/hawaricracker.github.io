import './globals.css';
import '../src/style.css'; // ← Add this line

export const metadata = {
  title: 'Home',
  description: 'UKM Atarashii Sekai ITERA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
