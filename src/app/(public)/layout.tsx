import { Button } from "@/components/ui/button";
import Link from "next/link";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="flex justify-end gap-4 p-4">
        <Link href="/auth/signin">
          <Button variant="outline">Sign in</Button>
        </Link>
        <Link href="/auth/signup">
          <Button variant="default">Sign up</Button>
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default PublicLayout;
