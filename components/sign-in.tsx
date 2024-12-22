import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        type="submit"
        className="m-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg shadow-md bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 active:shadow-inner"
      >
        <img
          src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png"
          alt="Google logo"
          className="w-5 h-5"
        />
        Sign in with Google
      </button>
    </form>
  );
}
