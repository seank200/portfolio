export default function RoleTag({ children }: { children?: React.ReactNode }) {
  return (
    <span className="mr-2 inline-block font-semibold text-ctp-teal">
      {children}
    </span>
  );
}
