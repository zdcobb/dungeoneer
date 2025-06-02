export interface iPageHeaderProps extends React.PropsWithChildren {
    className?: string;
}

export default function PageHeader({ children, className, ...props }: iPageHeaderProps) {
    return (
        <header
            className={`font-bold text-9xl ${className}`}
            {...props}
        >
            {children}
        </header>
    );
}
