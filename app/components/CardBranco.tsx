interface CardBrancoProps {
  children: React.ReactNode;
}

export default function CardBranco({ children }: CardBrancoProps) {
  return (
    <div className="bg-(--branco) w-80 px-5 py-4 rounded-lg border border-(--cor-borda)">
      <p className="text-center">{children}</p>
    </div>
  );
}
