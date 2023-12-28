
export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>~반에 오신 걸 환영합니다.</h2>
      {children}
    </>
  );
}