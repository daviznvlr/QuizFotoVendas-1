import { ChefHat } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <ChefHat className="w-8 h-8 text-primary" strokeWidth={1.5} />
      <div className="text-center">
        <h1 className="text-xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Panettone
        </h1>
        <p className="text-xs text-primary/80 -mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Gourmet
        </p>
      </div>
    </div>
  );
}
