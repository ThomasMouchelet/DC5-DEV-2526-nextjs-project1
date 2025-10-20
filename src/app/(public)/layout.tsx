import Link from "next/link";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <h1>Public Layout</h1>
      {children}
    </div>
  );
};

export default PublicLayout;
