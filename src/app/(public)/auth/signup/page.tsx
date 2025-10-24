import AuthForm from "@/components/auth/AuthForm";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-2">Sign in</h1>
      <AuthForm />
      <p className="mt-1">
        You have an account?{" "}
        <Link href="/auth/login" className="text-indigo-500 font-medium">
          Log in
        </Link>
      </p>
    </div>
  );
}
