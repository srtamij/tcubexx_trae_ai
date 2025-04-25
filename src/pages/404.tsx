import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-xl text-gray-600">Page not found</p>
      <Button
        className="mt-4"
        onClick={() => navigate('/')}
      >
        Go back home
      </Button>
    </div>
  );
}