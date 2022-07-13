interface ButtonProps {
    label: string,
    to: string,
    title: string
};

export function Button({ label, to, title }: ButtonProps) {
    return (
        <a className="p-4 px-10 bg-aqua text-white hover:bg-aqua-dark transition-opacity rounded-md" href={to} title={title}>
            {label}
        </a>
    )
};