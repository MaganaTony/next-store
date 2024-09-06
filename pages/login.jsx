import clsx from "clsx";
import { useForm } from "react-hook-form";
import { loginUser } from "../utils/api";
import { useState } from "react";
import { useRouter } from "next/router"; //Using router instead of useNavigate

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const router = useRouter(); //declaring router
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data) {
    try {
      setIsSubmitting(true);
      const token = await loginUser(data.username, data.password);
      if (token) {
        localStorage.setItem("token", token);
        router.push("/"); //pushing the route to router to redirect to home page
        setIsSubmitting(false);
      } else {
        setError("root.data", {
          type: "manual",
          message: "Invalid data",
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      setIsSubmitting(false);
    }
  }

  return (
    <main className="p-4 flex flex-col gap-10">
      <h1 className="text-2xl w-full font-bold text-center">Login Page</h1>
      <section className="flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-white/10 p-4 rounded-md flex flex-col gap-4 max-w-md w-full"
        >
          <div className="flex flex-col w-full gap-2">
            <input
              type="text"
              placeholder="username"
              className={clsx(
                "bg-black border border-white/50 p-2 rounded-md",
                { "bg-red-500/10 border-red-500": errors.username }
              )}
              {...register("username", {
                required: {
                  value: true,
                  message: "Username is required",
                },
              })}
            />
            {errors.username && (
              <span className="text-xs text-red-500">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full gap-2">
            <input
              type="password"
              placeholder="password"
              className={clsx(
                "bg-black border border-white/50 p-2 rounded-md",
                { "bg-red-500/10 border-red-500": errors.username }
              )}
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            className="rounded-md bg-white text-black font-bold p-2 disabled:bg-neutral-600 disabled:cursor-progress"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Login"}
          </button>
          {errors.root?.data && (
            <span className="text-xs text-red-500 w-full text-center uppercase">
              {errors.root.data.message}
            </span>
          )}
        </form>
      </section>
    </main>
  );
}
