import Navbar from "@/components/Navbar";

export default function MainLayout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
