"use client";

import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface AuthFormDTO {
  email: string;
  password: string;
}

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormDTO>();
  const onSubmit = (data: AuthFormDTO) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Input {...register("email", { required: true })} type="text" />
      <Input {...register("password", { required: true })} type="password" />
      <Button type="submit">Sign up</Button>
    </form>
  );
}
