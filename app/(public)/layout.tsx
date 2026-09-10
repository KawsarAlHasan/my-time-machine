import Footer from "@/_components/Footer";
import Navbar from "@/_components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
}
