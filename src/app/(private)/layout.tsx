import Link from "next/link";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>
        <ul className="flex gap-4 justify-center p-4 border-b">
          <li className="text-indigo-500 font-semibold hover:text-indigo-600 transition-all">
            <Link href="/posts/create">Create</Link>
          </li>

          <li className="text-indigo-500 font-semibold hover:text-indigo-600 transition-all">
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default PrivateLayout;
