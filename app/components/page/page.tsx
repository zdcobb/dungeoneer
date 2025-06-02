export interface iPageProps extends React.PropsWithChildren {
  className?: string;
}
export interface iPageContentProps extends React.PropsWithChildren {
  className?: string;
}

export function Page({ children, className, ...props }: iPageProps) {
  return (
    <main
      {...props}
      className={`h-dvh flex flex-col items-center p-30 gap-30 ${className}`}
    >
      {children}
    </main>
  );
}

export function PageContent({
  children,
  className,
  ...props
}: iPageContentProps) {
  return (
    <section {...props} className={className}>
      {children}
    </section>
  );
}
