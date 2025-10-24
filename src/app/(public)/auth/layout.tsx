export default function AuthForm({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <div className="col-span-1 p-6 flex items-center justify-center">
        <div className="w-full max-w-md">{children}</div>
      </div>

      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?_gl=1*l86jhz*_ga*MjAxNDQ5MzI4NC4xNzU5OTMwNzUy*_ga_8JE65Q40S6*czE3NjEzMDMyODkkbzckZzEkdDE3NjEzMDMzMDgkajQxJGwwJGgw)",
        }}
        className="col-span-1 bg-cover bg-center"
      ></div>
    </div>
  );
}
