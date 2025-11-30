import mariaWorking from "@/assets/maria-working.png";

export const AppHeader = () => {
  return (
    <header className="bg-background rounded-b-[3rem] shadow-lg p-6 pb-8">
      <div className="flex items-center justify-center gap-3">
        <img 
          src={mariaWorking} 
          alt="Maria trabalhando com resina" 
          className="w-12 h-12 rounded-full border-2 border-primary object-cover"
        />
        <h1 className="text-3xl font-bold text-primary">
          Resina do Zero
        </h1>
      </div>
    </header>
  );
};
